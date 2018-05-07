var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  var src = fs.createReadStream(file).pipe(res)
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s, port')
});
