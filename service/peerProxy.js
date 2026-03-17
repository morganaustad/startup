const { WebSocketServer } = require('ws');

let socketServer;

function peerProxy(httpService) {
    socketServer = new WebSocketServer({ 
        server: httpService,
        path: '/ws'
    });

    socketServer.on('connection', (socket) => {
        socket.isAlive = true;

        socket.on('message', function message(data) {
            socketServer.clients.forEach((client) => {
                if (client !== socket && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        socket.on('pong', () => {
            socket.isAlive = true;
        });
    });

    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) {
                return client.terminate();
            }

            client.isAlive = false;
            client.ping();
        });
    }, 10000);
}

function broadcastEvent(event) {
    if (!socketServer) { return; }

    socketServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(event));
        }
    });
}

module.exports = { peerProxy, broadcastEvent };