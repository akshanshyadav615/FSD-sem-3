const http = require('http');
const fs = require('fs');
const path = require('path');

const dir = './files';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('CRUD File Server Running');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
  console.log('Server running at http://localhost:3000/');
});