//archivo para mannejar el inicio de sesion 
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secretKey = 'mi_clave_super_secreta';

// endpoint para login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // validacion sencilla de estudiante
    if (username === 'admin' && password === '1234') {
        const user = { name: 'admin' };
        
        // generamos el token que dura 1 hora
        const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
        
        res.json({ token });
    } else {
        res.status(401).send('usuario o password incorrectos');
    }
});

module.exports = router;