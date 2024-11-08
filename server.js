// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Новое соединение установлено');
    socket.on('message', message => {
        // Рассылаем введенный текст всем подключенным клиентам
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

console.log('Сервер запущен на порту 8080');
