const express = require('express');
const router = express.Router();
const matchController = require('./matchController');

router.get('/', matchController.test)
router.post('/', matchController.match);

module.exports = router;