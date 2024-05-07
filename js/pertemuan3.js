const http = require('http');
const dt = require('./mymodule.js')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.write('Current Data')
    res.end('<h1>Hello World!</h1>');
}).listen(8080);

//npm install qrcode