var express = require('express');
var app = express();
const path = require('path');

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