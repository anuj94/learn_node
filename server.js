var http = require('http');

var counter = 0;

// Create an HTTP server
http.createServer(function (req, res) {
  res.writeHead(200);
  counter += 1;
  console.log("I'm inside server loop");
  res.end("hello world : "+ counter + "\n" );
}).listen(8080);

console.log("I'm outside server loop");
