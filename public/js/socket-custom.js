let socket = io(); // Inicializo la parte del cliente que estara pendiente de la comunicacion

socket.on("connect", function () {
  console.log("Conectado al servidor...");
});

socket.on("disconnect", function () {
  console.log("Se perdio la conexion con el servidor...");
});

// Emitir informacion, por lo general se envia un objeto con datos
socket.emit(
  "enviarMensaje",
  {
    usuario: "ClienteHomero",
    mensaje: "Hola desde cliente...",
  },
  function (resp) {
    // resp es la respuesta que envia el servidor a traves del callback
    console.log("Respuesta del servidor: ", resp);
  }
);

// Escuchar informacion
socket.on("enviarMensaje", function (mensaje) {
  // mensaje es la info enviada por el servidor
  console.log("Servidor: ", mensaje);
});
