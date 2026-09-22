
//Import the HTTP module
const http = require('http');
//Create the server
//req = request from the browser
//res = response that the server sends back
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/students') {
        res.end('Students Page');
    } else {
        res.end('Error Page');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
});  
