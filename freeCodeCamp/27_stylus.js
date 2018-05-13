var express = require('express');
var path = require('path');
var stylus = require('stylus');

var app = express();
var port = process.argv[2];
var htmlStylus = process.argv[3];

app.use(stylus.middleware(htmlStylus));
app.use(express.static(htmlStylus))

app.listen(+port || 3000);
