// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8000', "echo-protocol");

// Connection opened
socket.addEventListener('open', function(event) {
    socket.send('Hello Server!'); //where we would send ids etc to server for real time
});

// Listen for messages
socket.addEventListener('message', function(event) {
    console.log('Message from server ', event.data); //where we would receive ids etc to server for real time
});