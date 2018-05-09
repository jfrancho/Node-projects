var express = require('express');
var http = require('http');

var port = 3000;
var app = express();

//Add some middleware
app.use(function(req, res, next) {
  console.log("In comes a " + req.method + " to " + req.url);
  next();
});

// Send "Hello world"
app.use(function(req, res){
  res.writeHead(200, { "Content-Type" : "text/plain" });
  res.end('Hello world!\n');
})

// Starting the server
http.createServer(app).listen(+port);
