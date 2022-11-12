const express = require('express');
const router = express.Router();
const matchController = require('./matchController');

router.get('/', matchController.test)
router.post('/', matchController.match);
router.get('/:id', matchController.getProfile);

module.exports = router;