// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    console.log('Новое соединение установлено');
    socket.on('message', message => {
        console.log(`Получено сообщение: ${message}`); // Логируем сообщение

        // Отправляем команды всем подключенным клиентам как строки
        const messageStr = message.toString();  // Преобразуем сообщение в строку
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(messageStr);  // Отправляем как строку
            }
        });
    });
});

console.log('Сервер запущен на порту 8080');
