
class GameSession {
    constructor() {
        this.rooms = new Map();
        this.players = new Map();
    }

    addRoom(room) {
        this.rooms.set(room.id, room);
    }

    addPlayer(player) {
        this.players.set(player.id, player);
    }

    handlePlayerConnection(socket) {
        socket.on('joinRoom', ({ playerId, roomId }) => {
            const player = this.players.get(playerId);
            const room = this.rooms.get(roomId);

            if( player && room ) {
                player.joinRoom(room);
                room.broadcast('playerJoined', { playerId: player.id, roomId: room.id });
            }
        });
    }
}


module.exports = GameSession;