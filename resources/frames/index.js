const express = require('express');
const frames = express.Router();
const controller = require('./controller.js');

// frames.get('/:id', controller.show);

frames.get('/new', controller.indexNew);

frames.route('/:id')
  .get(controller.show);


// frames.route('/:id')
//   .get(controller.show)
//   .put(controller.showUpdate)
//   .delete(controller.destroy);
//
// frames.route('/')
//   .get(controller.index)
//   .post(controller.create);

module.exports = frames;
// exports.route = functions.https.onRequest(express);
