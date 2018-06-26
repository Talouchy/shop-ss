const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/shop');
mongoose.Promise = global.Promise;
