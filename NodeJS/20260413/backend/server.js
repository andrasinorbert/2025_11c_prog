const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const decodedUrl = decodeURIComponent(req.url);
    const name = decodedUrl.slice(1); // levágja az első "/"

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if(name){
        res.end(`Hello ${name}\n`);
    } else {
        res.end('Hello World\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});