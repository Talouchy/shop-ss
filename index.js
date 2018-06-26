var express = require('express');
var bodyParser = require('body-parser');
var config = require('./db');

// set up express app
const app = express();

// static files
app.use(express.static('./public'));

// set up template engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());

// initialize routes
app.use('/m', require('./routes/m-app'));

app.use('/', require('./routes/website'));

// listen for requests
app.listen(4000, function(){
  console.log('Now Listening for Requests');
});
