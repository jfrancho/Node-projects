var express = require('express');
var http = require('http');
var port = 3000;

// Build the app
var app = express();

//Add some middleware
app.use(function(req, res, next) {
  res.writeHead(200, { "Content-Type" : "text/plain" });
  res.end('Hello world!\n');
});

// Starting the server
http.createServer(app).listen(+port);
