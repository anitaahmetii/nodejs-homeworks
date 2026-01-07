const http = require('http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((request, response) => {
    const htmlPath = path.join(__dirname, 'login.html');
    if (request.url === '/login.html' && request.method === 'GET')
    {
        response.setHeader('Content-Type', 'text/html');
        fs.readFile(htmlPath, 'utf-8', (error, data) => {
            if (error) {
                response.end('<h1>Internal Server Error</h1>');
                return;
            }
            else return response.end(`${data} <h3>You are using ${request.method} method!</h3>`);
        });
        return;
    }
    else if (request.url === '/login' && request.method === 'POST')
    {
        response.end(`<h1>Success</h1> <h3>You were using ${request.method} method!</h3>`);
        return;
    }
 
    response.statusCode = 404;
    response.end("<h1>This page does not exist!</h1>");
});

server.listen(3000, () => {
    console.log("Server has started....");
});