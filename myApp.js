require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');

// Mount the express.static() middleware
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/json', function(req, res) {
    let message = 'Hello json';
  
    // Check the value of the MESSAGE_STYLE environment variable
    if (process.env.MESSAGE_STYLE === "allCaps") {
        message = "Hello World".toUpperCase();
      } else {
        message = "Hello World";
      }
  
    let json = {
      message: message
    };
  
    res.json(json);
  });

// Route handler for the root path
app.get('/', function(req, res) {
  let filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

module.exports = app;