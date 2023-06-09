const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

res.setHeader('Content-Type', 'texr/plain');

let path = './html/';
switch(req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    default: 
        path += '404.html'
        res.statusCode = 404;
        break;
}

fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
});

server.listen(3000, 'localhost', () => {
    console.log('listening for reqiests on port 3000');
});