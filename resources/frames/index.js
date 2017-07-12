const express = require("express");
const router = express.Router();
const controller = require('./controller.js');

router.get('/new', controller.indexNew);

// router.route('/:id')
//   .get(controller.show)
//   .put(controller.showUpdate)
//   .delete(controller.destroy);
//
// router.route('/')
//   .get(controller.index)
//   .post(controller.create);

module.exports = router;
