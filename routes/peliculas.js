const express = require('express');
const router = express.Router();
const service = require('../services/peliculaService');
const validarApiKey = require('../middlewares/auth');

// obtener todas
router.get('/', async (req, res) => {
    const lista = await service.getAll();
    res.json(lista);
});

// obtener una por id
router.get('/:id', async (req, res) => {
    const peli = await service.getById(req.params.id);
    res.json(peli);
});

// crear (protegido con apikey)
router.post('/', validarApiKey, async (req, res) => {
    const nueva = await service.create(req.body);
    res.json(nueva);
});

// actualizar
router.put('/:id', async (req, res) => {
    const editada = await service.update(req.params.id, req.body);
    res.json(editada);
});

// borrar
router.delete('/:id', async (req, res) => {
    await service.delete(req.params.id);
    res.send('pelicula borrada');
});

module.exports = router;