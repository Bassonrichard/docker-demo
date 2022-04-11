const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0';


let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\nEnvironment: '+ process.env.NODE_ENV);
});

app.listen(PORT, HOST);
console.log('Node server running on port ' + PORT);