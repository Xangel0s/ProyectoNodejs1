const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios'); // verifica bien el nombre

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


// Ruta correcta
app.use('/api/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando. Usa /api/usuarios para acceder a los datos.');
  });
  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
