const {io} = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if(message.usuario) {
            callback({
                message: 'todo salió bien'
            });
        } else {
            callback({
                message: 'todo salió mal'
            });
        }*/

    });
});