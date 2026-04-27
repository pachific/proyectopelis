module.exports = (req, res, next) => {
    // imprimir que ruta estan pidiendo
    console.log(`peticion: ${req.method} en ${req.url}`);
    next();
};