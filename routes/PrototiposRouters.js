'use strict'

let express = require('express');
let Prototipos = require('../controllers/PrototiposController')
let api = express.Router();

// Rutas para el controlador de usuarios
api.post('/reprocesar/ventas', Prototipos.reprocesarVentas);

module.exports = api;