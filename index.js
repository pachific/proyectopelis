const express = require('express');
const app = express();
const rutasPeliculas = require('./routes/peliculas');
const rutasAuth = require('./routes/auth'); // nueva ruta
const authenticateToken = require('./middlewares/auth'); // el validador
const logger = require('./middlewares/logger');

app.use(express.json());
app.use(logger);

// el login NO debe estar protegido (si no, como entran?)
app.use('/auth', rutasAuth);

// protegemos todas las rutas de peliculas con el middleware de jwt
app.use('/peliculas', authenticateToken, rutasPeliculas);

app.listen(3000, () => {
    console.log('servidor con jwt corriendo en el puerto 3000');
});