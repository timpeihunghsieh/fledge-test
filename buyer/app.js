var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello World');
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;