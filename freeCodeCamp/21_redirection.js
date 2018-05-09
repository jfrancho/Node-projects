var express = require('express');
var http = require('http');

var port = 3000;
var app = express();

app.get('/', function(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('This is the homepage');
})

app.get('/about', function(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Welcome to the about page');
})

app.get('/hello/:who', function(req, res) {
  if (req.params.who === 'johnny') {
    res.redirect("/hello/johnnythebest");
  }
  else if (req.params.who === 'google') {
    res.redirect("http://google.fr");
  }
  else {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hello dear ' + req.params.who + '.');
  }
})

app.get('*', function(req, res) {
  res.end('404, page not found.');
})

http.createServer(app).listen(+port);
