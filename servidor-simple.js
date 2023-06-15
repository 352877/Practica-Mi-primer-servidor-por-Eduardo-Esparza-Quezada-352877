const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo');
});

server.listen(3050);
console.log('Listening en puerto 3050 en http://localhost:3050/');