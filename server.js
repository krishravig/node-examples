const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Request Made, URL: ${req.url}`);
    res.setHeader('Content-Type', 'text/html');
    //res.write('<h1>Hello World</h1>');
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-ravi':
            res.statusCode = 301;
            res.setHeader('Location', '/about'); // redirection request
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if ( err){
            console.log('Failure to read the file');
            res.end();
        }
        //res.write(data);
        res.end(data);
    });

});

server.listen(3000, 'localhost', () => {
    console.log('server listening on port 3000');
})