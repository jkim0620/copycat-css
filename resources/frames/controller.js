let controller = {};

controller.indexNew = (req, res) => {
  res.render('frames/new.ejs');
}

controller.show = (req, res) => {
  // res.send(req.params.id)
  // .then(res.render('dashboard/show.ejs'));
  //
  // firebase.database().ref().child('frames').child(eventKey).on('child_added', snapshot => {
  //   let frame = snapshot;
  //   let htmlSnap = snapshot.child('html').val();
  //   let cssSnap = snapshot.child('css').val();
  //   console.log(frame);
  //   $('#frame-container').append( '<iframe srcDoc="' + htmlSnap + '<style>' + cssSnap + '</style>"' + '</iframe>')
  // });
  // firebase.database().ref().child('frames').child(req.params.id).once('value', snap => {
  //       $('#frame-container').append( '<iframe srcDoc="' + snap.html + '<style>' + snap.css + '</style>"' + '</iframe>')
  // });
  res.render('frames/show.ejs');
}


module.exports = controller;
