const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/usuarios'); // Asegúrate de que esto esté correctamente importado
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Aquí debes usar 'userRoutes' en lugar de 'usuariosRoutes'
app.use('/api/usuarios', userRoutes); // Cambié 'usuariosRoutes' por 'userRoutes'

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
