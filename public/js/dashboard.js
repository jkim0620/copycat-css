$(document).ready(() => {
  console.log('Welcome to dashboard');

  let config = {
    apiKey: "AIzaSyCip8dLX1XlkNwKsL7YRXP6THfI4F3Zwgk",
    authDomain: "ui-app-50173.firebaseapp.com",
    databaseURL: "https://ui-app-50173.firebaseio.com",
    projectId: "ui-app-50173",
    storageBucket: "gs://ui-app-50173.appspot.com",
    messagingSenderId: "518926407264",
  };

  firebase.initializeApp(config);

  let rootRef = firebase.database().ref().child('frames');

  // var ifr = document.createElement("iframe");
  // var content = '<html><head><link rel="stylesheet" href="http://bocoup.com/css/base.css" type="text/css" media="screen, projection" /></head><body>Hello, <b>world</b></body></html>';
  //
  // function srcDoc( iframe, content ) {
  //     if ("srcdoc" in ifr) {
  //         iframe.setAttribute("srcdoc", content);
  //         alert("cool");
  //     } else {
  //         iframe.setAttribute("src", "javascript: '" + content + "'");
  //     }
  // }
  //
  // srcDoc(ifr, content);
  // document.body.appendChild(ifr);


  // Populate dashboard page with all the frames data saved in firebase
  rootRef.on('value', framesData);

  function framesData(data) {
    let frames = data.val();
    let keys = Object.keys(frames);
    // console.log(keys);

    // let theIframe;

    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      console.log(k);
      let htmlCode = frames[k].html;
      let cssCode = frames[k].css;
      let frameTitle = frames[k].title;
      // console.log(htmlCode);

      let newIframe = document.createElement('iframe');
      let newSrcDoc = `${htmlCode}<style>${cssCode}</style>`;

      function createSrcDoc (iframe, content) {
        iframe.setAttribute('srcdoc', content);
      }

      createSrcDoc(newIframe, newSrcDoc);

      $('#frames-container').append(newIframe).append('<div class="desc"><h2>' + frameTitle + '</h2><a href="/frames/' + k + '"><div class="rotate-box"><button class="go-btn hvr-icon-wobble-horizontal"></button></div></a></div>')
      // ('<a href="/frames/' + k + '"><button class="link-btn">GO <i class="fa fa-chevron-right" aria-hidden="true"></i></button></a>');
      $('iframe').addClass('iframe-thumbnail');
    }
  }


});
