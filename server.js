var http = require('http'),
    port = process.argv[2]||8080;

port = +port;

var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.end('Got your call');
});

server.listen(port);
console.log('server started at localhost:' + port);
