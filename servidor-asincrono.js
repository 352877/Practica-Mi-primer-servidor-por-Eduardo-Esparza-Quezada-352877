const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3050, 'localhost', () => {
  console.log('Listening en puerto 3050 http://localhost:3050/');
});