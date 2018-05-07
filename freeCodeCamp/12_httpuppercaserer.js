var http = require('http');
var map = require('through2-map')

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    res.writeHead(200, {'Content-Type':'text/plain'})
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
  } else {
    res.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Listening on https://localhost:%s', port);
});
