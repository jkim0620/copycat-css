const express = require('express');
const router = express.Router();

router.use('/colors', require('./resources/items'));
router.use('/users', require('./resources/users'));
router.use('/favorites', require('./resources/favorites'));

module.exports = router;
