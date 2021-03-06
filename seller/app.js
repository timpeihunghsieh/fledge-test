var express = require('express');
var app = express();
const path = require('path');

app.use(function(req, res, next) {
  res.setHeader("X-Allow-FLEDGE", "true");
  return next();
});

app.get('/trusted-scoring-signals', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
      "https://fledge-buyer-test.ue.r.appspot.com/ad-1.html": {"ad1_key": 1},
      "https://fledge-buyer-test.ue.r.appspot.com/ad-2.html": {"ad2_key": "2"}}));
});

app.get('/report-result', function(req, res) {
  console.log("Received /report-result call");
  res.end("");
});

app.get('/report-win-debug', function(req, res) {
  console.log("Received /report-win-debug call");
  res.end("");
});

app.get('/report-loss-debug', function(req, res) {
  console.log("Received /report-loss-debug call");
  res.end("");
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('seller.html', { root: path.join(__dirname, 'public') });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
