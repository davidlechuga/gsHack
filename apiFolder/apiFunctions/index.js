const express = require('express');
const router = express.Router();
const services = require('./services')

router.use('/services', services)


module.exports = router;
