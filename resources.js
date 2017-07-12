const express = require('express');
const router = express.Router();

router.use('/frames', require('./resources/frames'));
// router.use('/users', require('./resources/users'));
// router.use('/favorites', require('./resources/favorites'));

module.exports = router;
