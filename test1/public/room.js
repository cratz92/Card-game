
class Room {
    constructor(id) {
        this.id = id;
        this.players = new Set();
    }

    addPlayer(player) {
        this.players.add(player);
    }

    removePlayer(player) {
        this.players.delete(player);
    }

    broadcast(event, data) {
        this.players.forEach(player => {
            player.socket.emit(event, data);
        });
    }

}


module.exports = Room;