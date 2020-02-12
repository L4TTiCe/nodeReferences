const http = require('http');
const path = require('path');
const fs = require('fs');

// Create Server Object
const server = http.createServer((req, res) => {
   console.log(req.url);

    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         { name : 'Anonymous', age: 20 },
    //         { name : 'Unknown', age: 24 },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // Build file path
    let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filepath);
    
    // Extension of File
    let extname = path.extname(filepath);

    // Content Type
    let contentType = 'text/html'
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filepath, (err, content) => {
        if(err) {
            if(err.code == "ENOENT") {
                // Page not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8')
                })
            }
            else {
                // Server Error
                res.writeHead(err.code);
                res.end(`Server Error: ${err.code}`)
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8')
        }
    })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));