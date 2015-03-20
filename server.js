var http = require('http');

var counter = 0;

// Create an HTTP server
http.createServer(function (req, res) {
  res.writeHead(200);
  counter += 1;
  res.end("hello world : "+ counter + "\n" );
}).listen(8080);

