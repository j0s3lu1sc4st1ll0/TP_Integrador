const express = require ('express');
const app = express();
const path = require('path');
const dbConnect = require('./config/mongo'); //Para poder conectar la base
const fs = require ('fs');
const writeLog =  require('../src/middlewares/log');
/* Configuracion de express */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, '../public')));

 /*Middleware para la carga del formulario*/ 
app.use(express.urlencoded({extended: true}));
app.use(writeLog);

/* routes */
const main = require('./routes/main');
app.use('/', main);
const products = require('./routes/products');
app.use('/products', products);



/* Para mostrar error de pagina cuando ingresemos mal una ruta */
app.use ((req, res, next) => {
    res.status(404).render('404-page');
    next();
});

dbConnect ();//uso la funcion que cree en mongo.js

app.listen (3000, () => console.log ('Servidor corriendo en el puerto 3000'));