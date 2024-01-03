const Room = require('./room');


class Player {
    constructor(id, name, socket) {
        this.id = id;
        this.name = name;
        this.socket = socket;
        this.currentRoom = null;
    }

    joinRoom(room) {
        this.currentRoom = room;
        room.addPlayer(this);
    }

    leaveRoom() {
        if(this.currentRoom) {
            this.currentRoom.removePlayer(this);
            this.currentRoom = null;
        }
    }

}



module.exports = Player;