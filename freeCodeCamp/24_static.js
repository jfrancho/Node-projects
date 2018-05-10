var express = require('express');
var path = require('path');
var app = express();

var port = process.argv[2];
var indexhtml = process.argv[3];

app.use(express.static(indexhtml || path.join(__dirname, 'public')));

app.listen(+port);
