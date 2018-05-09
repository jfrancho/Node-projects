var http = require('http');

var port = 3000;

var app = http.createServer(function(req, res){
  var answer = "";
  answer += "Request URL: " + req.url + "\n";
  answer += "Request type: " + req.method + "\n";
  answer += "Request headers: " + JSON.stringify(req.headers);
  res.writeHead(200, {
    'Content-Type' : 'text/plain'
  });
  res.end(answer);
});

app.listen(+port, "localhost")
console.log('Server running at http://localhost://%s', port);
