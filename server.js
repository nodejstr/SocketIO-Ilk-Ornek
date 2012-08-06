var express = require('express')
  , socket = require('socket.io');

var io = socket.listen(8888);
var app = express();

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function(data) {
        console.log(data);
    });
});

app.listen(1337);
console.log('Server started');