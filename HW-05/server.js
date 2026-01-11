const http = require('http');
const fs = require('node:fs');
const path = require('node:path');
const querystring = require('node:querystring');

const server = http.Server((request, response) => {
    const htmlPath = path.join(__dirname, 'login.html');
    if (request.url === '/' && request.method === 'GET')
    {
        response.setHeader('Content-Type', 'text/html');
        fs.readFile(htmlPath, 'utf-8', (error, data) => {
            if (error) {
                response.end('<h1>Internal Server Error</h1>');
                return;
            }
            else return response.end(data);
        });
        return;
    }
    else if (request.url === '/login' && request.method === 'POST')
    {
        let body = "";
        request.on('data', chunk => {
            body += chunk;
        });
        request.on('end', () => {
            const parsedData = querystring.parse(body);
            const email = parsedData.email;
            const password = parsedData.password;

            if (email === 'user@user.com' && password === 'secret')
            {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(`<h1>Logged in successfully<h1> <h3><br>Email: <i>${email}</i> <br> Password: <i>${password}</i></h3>`);
            }
            else 
            { 
                response.end("Not authorized");
            }

        });
        return;
    }
    response.statusCode = 404;
    response.end("404 Not Found");
});

server.listen(3000, () => {
    console.log("Server has started....");
});