var express = require('express');
var http = require('http');
var handlebars = require('handlebars');

var port = 3000;
var app = express();

app.get('/', function(req, res) {
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('This is the homepage');
})

app.set('views', __dirname + "/views");
app.set("view engine", handlebars);

http.createServer(app).listen(+port);
