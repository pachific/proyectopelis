const { Sequelize, DataTypes } = require('sequelize');

// configurando sqlite como dice la tarea
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const Pelicula = sequelize.define('Pelicula', {
    titulo: DataTypes.STRING,
    director: DataTypes.STRING,
    estreno: DataTypes.INTEGER
});

// sincronizar la base de datos
sequelize.sync();

module.exports = { sequelize, Pelicula };