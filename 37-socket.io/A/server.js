//server.js
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log(`a user connected to the socket`);
    socket.on('disconnect', () => {
        console.log('a user left us');
    });
    socket.on('chat message', (msg, room) => {
        console.log(`message: ${msg}; room: ${room}`);
        io.to(room).emit('chat message 2', msg);
    });
    socket.on('join', (room) => {
        socket.leaveAll();
        socket.join(room);
        socket.emit('join message', `Switched to room ${room}`);
    })
});

http.listen(3030, ()=> {
    console.log("Application running at port 3030...");
});