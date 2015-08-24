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

