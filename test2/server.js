const http = require('http');
const socketIo = require('socket.io');
const express = require('express');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

// serve static files from public directory
app.use(express.static('public'));


io.on('connection', (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log(`${socket.id} has disconnected`);
    });

});


server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});





