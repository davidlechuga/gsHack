const express = require('express');
const router = express.Router();
const perfiles = require('./perfiles');
const intereses = require ('./intereses');
const productos = require ('./productos');
const ubicaciones = require ('./ubicaciones');

router.get('/perfiles', perfiles);
router.get('/intereses', intereses);
router.get('/productos', productos);
router.get('/ubicaciones', ubicaciones);

module.exports = router;