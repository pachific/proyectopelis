const { Pelicula } = require('../modules/db');

// aqui esta toda la logica de sequelize
module.exports = {
    getAll: () => Pelicula.findAll(),
    getById: (id) => Pelicula.findByPk(id),
    create: (data) => Pelicula.create(data),
    update: async (id, data) => {
        await Pelicula.update(data, { where: { id } });
        return Pelicula.findByPk(id);
    },
    delete: (id) => Pelicula.destroy({ where: { id } })
};