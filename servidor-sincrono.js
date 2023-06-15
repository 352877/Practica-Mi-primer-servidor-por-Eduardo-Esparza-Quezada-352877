const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  const fileContent = fs.readFileSync('index.html');
  res.end(fileContent);
});

server.listen(3050, 'localhost', () => {
  console.log('Listening en puerto 3050 en http://localhost:3050/');
});