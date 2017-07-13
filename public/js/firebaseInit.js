// // Require firebase
// let firebase = require('firebase');
//
// // Get a reference to the database service
// let htmlFirepadRef;
// let cssFirepadRef;
//
// // Setting HTML text editor
// let htmlEditor = ace.edit('html-editor');
// htmlEditor.setTheme('ace/theme/monokai');
// htmlEditor.getSession().setMode('ace/mode/html');
// htmlEditor.setValue('<!-- HTML code here -->');
//
// // Setting CSS text editor
// let cssEditor = ace.edit('css-editor');
// cssEditor.setTheme('ace/theme/monokai');
// cssEditor.getSession().setMode('ace/mode/css');
// cssEditor.setValue('/* CSS code here */');
//
//
// // Initializing Firebase, Ace, and Firepad
// function init() {
//
//   // Initialize Firebase.
//   let config = {
//     apiKey: "AIzaSyCip8dLX1XlkNwKsL7YRXP6THfI4F3Zwgk",
//     authDomain: "ui-app-50173.firebaseapp.com",
//     databaseURL: "https://ui-app-50173.firebaseio.com",
//     projectId: "ui-app-50173",
//     storageBucket: "gs://ui-app-50173.appspot.com",
//     messagingSenderId: "518926407264",
//   };
//   firebase.initializeApp(config);
//
//   let firebaseDbRef = firebase.database().ref();
//   // Get Firebase Database reference.
//   htmlFirepadRef = dbRef;
//   cssFirepadRef = dbRef;
//
//   // // Create Ace editor.
//   // let editor = ace.edit('firepad');
//
//   // Create Firepad.
//   let htmlFirepad = Firepad.fromACE(htmlFirepadRef, htmlEditor);
//   let cssFirepad = Firepad.fromACE(cssFirepadRef, cssEditor);
// }
//
// init();
