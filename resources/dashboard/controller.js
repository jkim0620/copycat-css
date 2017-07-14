let controller = {};

controller.index = (req, res) => {
  res.render('dashboard/show.ejs');
}

module.exports = controller;
