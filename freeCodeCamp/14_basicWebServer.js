var http = require('http');

var port = 3000;

var app = http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-type' : 'text/plain'
  });
  res.end("Hello world ! \n");
})

app.listen(+port, "localhost")
console.log('Server running at http://localhost://%s', port);
