const mysql = require('mysql2');

// Configura la conexión
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'laboratorioKiller'
});

// Conecta
connection.connect(err => {
  if (err) {
    return;
  }
  console.log('Conectado a la base de datos con ID ' + connection.threadId);
});

// Puedes hacer una consulta de prueba
connection.query('SELECT NOW() AS ahora', (err, results) => {
  if (err) throw err;
  console.log('Fecha actual desde la DB:', results[0].ahora);
  
  // Cierra la conexión
  connection.end();
});
