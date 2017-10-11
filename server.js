const http = require('http')

var port = process.env.port
// Build a HttpServer
// req (Request) ask from clients.
// res (Response) return states from server.
var server = http.createServer(function(req, res){

    var resHeader = {
        'Content-Type':'text/html; charset=utf-8 ',
        'Accept-Language':'utf-8',
        'Accept-Charset':'utf-8',
    }
    res.writeHead(200, resHeader)
    res.write('<h1>Hello</h1>', 'utf8');
    res.write('<p>這是由node.js建立的WebServer</p>', 'utf8');
    res.end();
});

// Open port 1234 and run the server.
server.listen(port)
console.log("Server running at prot http://127.0.0.1:"+port);