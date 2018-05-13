var express = require('express');
var fs = require('fs');

var app = express();
var port = process.argv[2];
var filename = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(filename.toString(), function(e, data) {
    if (e) return res.sendStatus(500);
    try {
        var books = JSON.parse(data);
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(books)
  })
});

app.listen(+port || 3000);
