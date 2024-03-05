require('dotenv-flow').config();

const express = require('express');
const app = express();
const path = require('path');

// Mount the express.static() middleware
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/json', (req, res) => {
  let message = 'Hello json';

  // Check the value of the MESSAGE_STYLE environment variable
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ "message":message });
});

// Route handler for the root path
app.get('/', function(req, res) {
  let filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

module.exports = app;