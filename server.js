// simple application to create a server to listen on a port for requests

var http = require('http');

var server = http.createServer(function(req, res){
  //form the header of the request packet
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey world');
});

server.listen(3000, '127.0.0.1');
console.log('Hello world, now listening to port 3000');
