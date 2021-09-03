var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Listening on localhost:3000');
});