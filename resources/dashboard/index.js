const express = require("express");
const router = express.Router();
const controller = require('./controller.js');

router.route('/:id')
  .get(controller.show);

router.route('/')
  .get(controller.index);

module.exports = router;
