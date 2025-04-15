const db = require('../db/config');

// Obtener todos los usuarios
exports.getUsers = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
};

// Crear nuevo usuario
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO usuarios (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Usuario creado', id: result.insertId });
  });
};

// Obtener un usuario específico
exports.getUser = (req, res) => {
  const { id } = req.params; // Aquí se extrae el 'id' correctamente desde req.params
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, row) => {
    if (err) throw err;
    if (row.length > 0) {
      res.json(row[0]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });
};

// Actualizar usuario
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.query('UPDATE usuarios SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Usuario actualizado' });
  });
};

// Eliminar usuario
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Usuario eliminado' });
  });
};
