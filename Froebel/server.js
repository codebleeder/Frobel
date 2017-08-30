
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
var index = fs.readFileSync('Index.html');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
}).listen(port);
