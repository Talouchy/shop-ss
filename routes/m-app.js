const express = require('express');
const router = express.Router();

var mAppController = require('../controllers/mAppController');

mAppController(router);

module.exports = router;
