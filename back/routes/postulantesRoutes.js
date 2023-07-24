const express = require('express')
const router = express.Router()
const postulantes = require('../models/postulantes')

router.get('/', postulantes.leerPostulantes)
router.get('/oracle', postulantes.leerDatosOracle)

module.exports = router;