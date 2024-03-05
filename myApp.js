
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Mount the express.static() middleware
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/json', (req, res) => {


  // Check the value of the MESSAGE_STYLE environment variable
  if (process.env["MESSAGE_STYLE"] == 'uppercase') {
    res.json({ "message":"HELLO JSON" });
  }

  res.json({ "message":"Hello json" });
});

// Route handler for the root path
app.get('/', function(req, res) {
  let filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

module.exports = app;