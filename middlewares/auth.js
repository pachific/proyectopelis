module.exports = (req, res, next) => {
    const key = req.headers['x-api-key'];
    // validar si tiene el api key correcto
    if (key === 'mi-clave-secreta') {
        next();
    } else {
        res.status(403).send('error: no tienes acceso porque falta el apikey');
    }
};