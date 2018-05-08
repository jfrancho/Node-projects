var http = require('http');
var url = require('url');

var port = process.argv[2];

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixTime (time) {
  return { unixtime : time.getTime() }
}

function parseQuery(url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso))
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result;

  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    url = url.parse(req.url, true)
    res.end(JSON.stringify(parseQuery(url)))
  } else {
    res.writeHead(405);
    res.end();
  }
}).listen(+port, function() {
    console.log('Listening on port:%s', port)
})
