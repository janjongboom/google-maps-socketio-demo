"use strict";

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');

function handler(req, res) {
    var url = req.url === "/" ? "/client.html": req.url
    fs.readFile(__dirname + url, function(err, data) {
        res.writeHead(200);
        res.end(data);
    });
}

io.sockets.on('connection', function(socket) {
    socket.on('point', function (data) {
        io.sockets.emit('point', data);
    });
});

app.listen(process.env.PORT);