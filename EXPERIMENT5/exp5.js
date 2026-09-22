const http = require('http');

let items = ['Apple', 'Banana'];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
        res.end(JSON.stringify(items));
    }

    else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk);

        req.on('end', () => {
            items.push(body);
            res.end('Item added: ' + body);
        });
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
