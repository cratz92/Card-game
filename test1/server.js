const http = require('http');
const socketIo = require('socket.io');
const Player = require('./public/player');
const GameSession = require('./public/gamesession');
const Room = require('./public/room');

const server = http.createServer();
const io = socketIo(server);
const port = 3000;




io.on('connection', (socket) => {
    console.log('a user connected');

    const newPlayer = new Player(socket.id, 'Player Name', socket);
    session.addPlayer(newPlayer);

    session.handlePlayerConnection(socket);

    socket.on('disconnect', () => {
        console.log('a user has disconnected')
    });
});


server.listen(port, () => {
    console.log(`server is listenning on port ${port}`);
});