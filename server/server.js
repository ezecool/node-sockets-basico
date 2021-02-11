const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app); // express usa internamente http, por eso podemos enviar el servidor express como argumento en la creacion del servidor http, ya que socket.io no trabaja directamente con express
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Inicializamos los sockets de la parte del backend
module.exports.io = socketIO(server);

// Traemos el codigo de sockets.js
require('./sockets/sockets');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});