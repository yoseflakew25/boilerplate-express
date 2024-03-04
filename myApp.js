let express = require('express');
let app = express();
let path = require('path');

// Mount the express.static() middleware
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route handler for the root path
app.get('/', function(req, res) {
  let filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

module.exports = app;