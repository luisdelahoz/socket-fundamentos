const socket = io();
        
socket.on('connect', () => {
    console.log('conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('perdimos conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Luis',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});
