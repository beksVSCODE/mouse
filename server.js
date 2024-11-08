// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Новое соединение установлено');
    socket.on('message', message => {
        // Шлем данные о движении курсора на клиента (ноутбук)
        server.clients.forEach(client => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log('Сервер запущен на порту 8080');
