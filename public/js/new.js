$(document).ready(() => {
  console.log("Welcome to Julia's final project");

  // Setting HTML text editor
  let htmlEditor = ace.edit('html-editor');
  htmlEditor.setTheme('ace/theme/twilight');
  htmlEditor.getSession().setMode('ace/mode/html');
  // htmlEditor.setValue('<!-- HTML code goes here -->');

  // Setting CSS text editor
  let cssEditor = ace.edit('css-editor');
  cssEditor.setTheme('ace/theme/twilight');
  cssEditor.getSession().setMode('ace/mode/css');
  // cssEditor.setValue('/* CSS code goes here */');

  // Initializing Firebase, Ace, and Firepad
  // Initialize Firebase.
  let config = {
    apiKey: "AIzaSyCip8dLX1XlkNwKsL7YRXP6THfI4F3Zwgk",
    authDomain: "ui-app-50173.firebaseapp.com",
    databaseURL: "https://ui-app-50173.firebaseio.com",
    projectId: "ui-app-50173",
    storageBucket: "gs://ui-app-50173.appspot.com",
    messagingSenderId: "518926407264",
  };
  firebase.initializeApp(config);

  // Get Firebase Database reference.
  let firebaseDbRef = firebase.database().ref();
  let htmlFirepadRef = firebaseDbRef.child('html');
  let cssFirepadRef = firebaseDbRef.child('css');

  // // Create Ace editor.
  // let editor = ace.edit('firepad');

  // Create Firepad.
  let htmlFirepad = Firepad.fromACE(htmlFirepadRef, htmlEditor);
  let cssFirepad = Firepad.fromACE(cssFirepadRef, cssEditor);

  // htmlEditor.setValue('<!-- HTML code goes here -->');
  // cssEditor.setValue('/* CSS code here */');

  // Setting iframe to preview code
  // Reference: https://subinsb.com/how-to-create-a-html-css-js-code-editor-using-jquery
  let $preview = $('#preview').contents().find('body');
  $preview.html('<span id="htmlCode"></span><style id="cssCode"></style>');

  // Whenever code changes in the editor, update iframe preview
  htmlEditor.on('change', function() {
    $preview.find('#htmlCode').html(htmlEditor.getValue());
  });

  cssEditor.on('change', function() {
    $preview.find('#cssCode').html(cssEditor.getValue());
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
    let code = htmlEditor.getValue() + "\n<style>\n" + cssEditor.getValue() + "\n</style>";
    download(code, 'uicode.txt', 'text/plain')
  });

  $('#modalBtn').click(() => {
    $('#modal').fadeIn(200);
    $('input').focus();
  });

  $('#closeBtn').click(() => {
    $('#modal').fadeOut(200);
  });


  function saveData(html, css, title) {
    let titleVal = $('#title').val();

    // A frame entry
    let frameData = {
      html: htmlEditor.getValue(),
      css: cssEditor.getValue(),
      title: titleVal,
    }

    // Get a key for a new Frame
    let newFrameKey = firebase.database().ref().child('frames').push().key;

    // Write the new frame's data simultaneously in the frames list
    let updates = {};
    updates['/frames/' + newFrameKey] = frameData;

    // Save new frame with unique key to firebase db and redirect to home page
    return firebase.database().ref().update(updates).then(() => { window.location = '/' });
  }


  // On click on save button new code gets saved to firebase db
  $('#saveBtn').on('click', saveData);

  $("#title").keypress((e) => {
    if (e.keyCode === 13) {
      saveData();
    }

  });

  $('#cursor').addClass('animated flash');

});
