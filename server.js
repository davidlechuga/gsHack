const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
// const home = require('./apiFolder/home');
// const public = require('./apiFolder/public');
// const admin = require('./apiFolder/admin');
const apiFolder = require('./apiFolder')


app.listen(process.env.PORT, ()=>{
    console.log(`Inciiando el servidor en puerto ${process.env.PORT}`);
    console.log(`http:localhost:${process.env.PORT}/clientalika`);
})

app.use('/grandes-cientificos', apiFolder);
app.use('/clientalika', express.static('client/marketplace/public'))
// app.use('/home', home);
// app.use('/public', public);
// app.use('/admin', admin);
