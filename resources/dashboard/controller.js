let controller = {};

controller.index = (req, res) => {
  res.render('dashboard/index.ejs');
}

module.exports = controller;
