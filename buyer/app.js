var express = require('express');
var app = express();
const path = require('path');

app.use(function(req, res, next) {
  res.setHeader("X-Allow-FLEDGE", "true");
  res.setHeader("Supports-Loading-Mode", "fenced-frame");
  return next();
});

app.get('/trusted-bidding-signals', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({"trustedkey1": "1", "trustedkey3": "3"}));
});

app.get('/report-win', function(req, res) {
  console.log("Received /report-win call");
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('buyer.html', { root: path.join(__dirname, 'public') });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
