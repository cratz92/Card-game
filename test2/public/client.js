
// Set up an event listener for the DOM DOMContentLoaded event to ensure the script runs after the entire page is loaded.
document.addEventListener('DOMContentLoaded', function(){
    let socket = io();
    let messages = document.getElementById('messages');
    let form = document.getElementById('form');
    let input = document.getElementById('input');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });

    socket.on('chat message', (msg) => {
        let message = document.createElement('li');
        message.textContent = msg;
        messages.appendChild(message);
        window.scrollTo(0, document.body.scrollHeight);
    });

});