const express = require('express');
const frames = express.Router();
const controller = require('./controller.js');

// frames.get('/:id', controller.show);

frames.get('/new', controller.indexNew);

frames.route('/:id')
  .get(controller.show);


module.exports = frames;
// exports.route = functions.https.onRequest(express);
