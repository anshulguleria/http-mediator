var http = require('http');

// get call url
var url = process.argv[2];

// use this for custom method
var options = {
    hostname: 'localhost',
    port: 8080,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': 20
    }
};

// for now we go by get method only
var req = http.request(options, function (res) {

    res.setEncoding('utf8');

    var data = "";
    res.on('data', function (chunkData) {
        data += chunkData;
    });

    res.on('end', function () {
        console.log(data);
    });
});

// TODO: define your mediator routes
// which will take url to forward to as param. This
// will help in exposing mediator as http hosted
// service also.

// TODO: expose mediator as module.

// TODO: expose mediator as cli tool.

let server = null;

// exports the created mediator server
module.exports = {
    server
};

