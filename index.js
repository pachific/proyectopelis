const express = require('express');
const app = express();
const rutasPeliculas = require('./routes/peliculas');
const logger = require('./middlewares/logger');

app.use(express.json()); // para que entienda el body en json
app.use(logger); // middleware de logeo global

// rutas principales
app.use('/peliculas', rutasPeliculas);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto ' + PORT);
});