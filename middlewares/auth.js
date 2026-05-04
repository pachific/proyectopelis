//aqui se actualiza todo para verifficar un token real
const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_super_secreta'; // esto deberia ser secreto

module.exports = (req, res, next) => {
    // el token suele venir en el header 'authorization'
    const authHeader = req.headers['authorization'];
    
    // el formato suele ser "Bearer TOKEN", asi que sacamos solo el token
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('error: no hay token, no puedes pasar');
    }

    // verificar si el token es valido
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send('error: token no valido o ya expiro');
        }
        // si todo bien, guardamos el usuario en la peticion y seguimos
        req.user = user;
        next();
    });
};