var http = require('http');

var port = 3000;

var app = http.createServer(function(req, res){
  // Homepage
  if (req.url === '/') {
    res.writeHead(200, { 'Content-type' : 'text/plain' });
    res.end('Welcome to the homepage');
  }

  // About page
  if (req.url === '/about') {
    res.writeHead(200, { 'Content-type' : 'text/plain' });
    res.end('Welcome to the About page');
  }

  // 404'd !
  else {
    res.writeHead(404, { 'Content-type' : 'text/plain' });
    res.end('404 Error');
  }
}).listen(+port, "localhost")
console.log('Server running at http://localhost://%s', port);
