const express = require('express');
const router = express.Router();

var adminPageController = require('../controllers/adminPageController');
var homePageController = require('../controllers/homePageController');

homePageController(router);
adminPageController(router);

module.exports = router;
