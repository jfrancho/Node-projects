var express = require('express');
var logger = require('morgan');
var http = require('http');
var app = express();
var port = 3000;

app.use(logger('combined'));

app.use(function(req, res) {
  res.writeHead(200, { "Content-Type" : "text/plain" });
  res.end('Hello World !\n');
});

http.createServer(app).listen(+port);
