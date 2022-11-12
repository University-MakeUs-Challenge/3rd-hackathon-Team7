const express = require('express');
const jwtMiddleware = require('../jwtMiddleware');
const router = express.Router();
const matchController = require('./matchController');
const jwtMiddleware = require('../jwtMiddleware');

router.get('/',matchController.test)
router.post('/', matchController.match);
router.get('/:id', matchController.getProfile);
router.post('/time', matchController.postTimes);

module.exports = router;