var express = require('express');
var app = express();

var port = 3000;

app.put('/path/:NAME', function(req, res) {
  res.send(req.params.NAME)
});

require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex') 


app.listen(+port);
