var express = require('express');
var http = require('http');

var port = 3000;
var app = express();

app.all('*', function(req, res, next) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  next();
})

app.get('/', function(req, res) {
  res.end('This is the homepage');
})

app.get('/About', function(req, res) {
  res.end('Welcome to the about page');
})

app.get('*', function(req, res) {
  res.end('404, page not found.');
})

http.createServer(app).listen(+port);
