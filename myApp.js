
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Mount the express.static() middleware
app.use('/public', express.static(path.join(__dirname, 'public')));
console.log(process.env["MESSAGE_STYLE"]);

app.get('/json', (request, response) => {


  // Check the value of the MESSAGE_STYLE environment variable
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    response.json({ "message":"HELLO JSON" });
  } else {
    response.json({ "message":"Hello json" });

  }

});

// Route handler for the root path
app.get('/', function(req, res) {
  let filePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(filePath);
});

module.exports = app;