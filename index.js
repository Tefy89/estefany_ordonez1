function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log("Ejercicio demostrativo");

// Servidor mínimo para mantener el contenedor vivo
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('App corriendo correctamente');
});

server.listen(3080, () => {
  console.log('Servidor escuchando en puerto 3080');
});


module.exports = { suma, resta };
