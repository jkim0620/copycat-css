// Require firebase
let firebasedb = require('firebase');

// Setting HTML text editor
let htmlEditor = ace.edit('html-editor');
htmlEditor.setTheme('ace/theme/monokai');
htmlEditor.getSession().setMode('ace/mode/html');
htmlEditor.setValue('<!-- HTML code goes here -->');

// Setting CSS text editor
let cssEditor = ace.edit('css-editor');
cssEditor.setTheme('ace/theme/monokai');
cssEditor.getSession().setMode('ace/mode/css');
cssEditor.setValue('/* CSS code here */');

// Initializing Firebase, Ace, and Firepad
const init = () => {

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

}

$(document).ready(() => {

  console.log("Welcome to Julia's final project");

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
  })

  // On click on save button new code gets saved to firebase db
  $('#saveBtn').on('click', (html, css) => {
    alert("click");

    // A frame entry
    let frameData = {
      html: htmlEditor.getValue(),
      css: cssEditor.getValue()
    }

    // Get a key for a new Frame
    let newFrameKey = firebase.database().ref().child('frames').push().key;

    // Write the new frame's data simultaneously in the frames list
    let updates = {};
    updates['/frames/' + newFrameKey] = frameData;

    return firebase.database().ref().update(updates);
  });



});
