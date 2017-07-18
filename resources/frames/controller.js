let controller = {};

controller.indexNew = (req, res) => {
  res.render('frames/new.ejs');
}

controller.show = (req, res) => {
  res.render('frames/show.ejs');
}


module.exports = controller;
