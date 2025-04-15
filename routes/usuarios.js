
const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');


router.get('/', usuariosController.getUsers);
router.post('/', usuariosController.createUser);
router.get('/:id', usuariosController.getUser);
router.put('/:id', usuariosController.updateUser);
router.delete('/:id', usuariosController.deleteUser);


module.exports = router;
