
const { io } = require('../server');

// Cuando se conecte el cliente
io.on("connection", (client) => {
  // el objeto client aporta informacion del cliente que se conecta
  console.log("Usuario conectado...");

  client.emit("enviarMensaje", {
    usuario: "Sistema",
    mensaje: "Bienvenido a nuestra aplicacion...",
  });

  client.on("disconnect", () => {
    console.log("Usuario desconectado...");
  });

  // Escuchar al cliente
   client.on("enviarMensaje", (data, callback) => {
      //console.log(data);
      client.broadcast.emit('enviarMensaje', data);

/*     if (data.usuario) {
      callback({
        resp: "TODO BIEN",
      });
    } else {
      callback({
        resp: "TODO MAL",
      });
    } */

  });
});
