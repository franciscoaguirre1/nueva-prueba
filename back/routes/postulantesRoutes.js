const express = require('express')
const router = express.Router()
const postulantes = require('../models/postulantes')

router.get('/', postulantes.leerPostulantes)
router.get('/orcale', postulantes.leerDatosOracle)

module.exports = router;