var express = require('express');
var path = require('path');

var port = process.argv[2];
var indexjade = process.argv[3];
var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));

app.get('/home', function(req, res) {
  res.render(indexjade, {date: new Date().toDateString()})
})

app.listen(+port);
