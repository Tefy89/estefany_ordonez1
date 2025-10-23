function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

console.log("Ejercicio demostrativo");


const http = require('http');

// Solo iniciar servidor si NO estamos corriendo tests
if (!process.env.CI && process.env.JEST_WORKER_ID === undefined) {
  const server = http.createServer((req, res) => {
    res.end('App corriendo correctamente');
  });

  server.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
  });
}

module.exports = { suma, resta };


module.exports = { suma, resta };
