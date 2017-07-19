$(document).ready(function() {
  let config = {
    apiKey: "AIzaSyCip8dLX1XlkNwKsL7YRXP6THfI4F3Zwgk",
    authDomain: "ui-app-50173.firebaseapp.com",
    databaseURL: "https://ui-app-50173.firebaseio.com",
    projectId: "ui-app-50173",
    storageBucket: "gs://ui-app-50173.appspot.com",
    messagingSenderId: "518926407264",
  };
  firebase.initializeApp(config);

  // Setting HTML text editor
  let htmlViewEditor = ace.edit('view-html-editor');
  htmlViewEditor.setTheme('ace/theme/twilight');
  htmlViewEditor.getSession().setMode('ace/mode/html');

  // Setting CSS text editor
  let cssViewEditor = ace.edit('view-css-editor');
  cssViewEditor.setTheme('ace/theme/twilight');
  cssViewEditor.getSession().setMode('ace/mode/css');

  // Get the last parameter of url
  let url = window.location.href;
  let params = url.substring(url.lastIndexOf('/') + 1);

  console.log(params);

  // retrieve codes from firebase db and populate ace editor with the db
  firebase.database().ref().child('frames').child(params).once('value', snap => {
    $('#view-iframe').attr('srcdoc', `${snap.val().html} <style> ${snap.val().css} </style>`);
    htmlViewEditor.setValue(snap.val().html);
    cssViewEditor.setValue(snap.val().css);
  });

  //helper function to create file download
  // Reference: https://github.com/Brikky/shark-byte-node
  function download(data, filename, type) {
    let a = document.createElement("a"),
      file = new Blob([data], {
          type: type
      });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
      let url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  //export all codes into a document for the user
  $('#exportBtn').click(() => {
    let code = htmlViewEditor.getValue() + "\n<style>\n" + cssViewEditor.getValue() + "\n</style>";
    download(code, 'uicode.txt', 'text/plain')
  });
});
