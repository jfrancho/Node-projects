var express = require('express');
var fs = require('fs');

var app = express();
var port = process.argv[2];
var folder = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(folder.toString(), function(err, file) {
    if (err)
      return console.error('There was an error.')
    var lines = file.toString()
    var json = JSON.parse(lines);
  })
  res.json(json)
})

app.listen(+port || 3000);
