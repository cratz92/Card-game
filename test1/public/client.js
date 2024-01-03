
const socket = io('http://localhost:3000');


socket.emit('joinRoom', { playerId: 'Player1', roomId: 'room1' });

socket.on('playerJoined', (data) => {
    console.log('Player joined: ', data);
});
