var express = require('express');

var app = express()

console.log('Ok')
app.get('/', function(req, res) {
  res.send('Test')
})

app.listen(8080)
