const { Sequelize } = require('sequelize');

// Conexión con MySQL
const sequelize = new Sequelize('bd_mysql', 'root', 'root', {
  host: 'localhost',
  port: 3307,  
  dialect: 'mysql',  // Especifica MySQL como el dialecto
  logging: false // Cambia a true si quieres ver las consultas SQL
});

module.exports = sequelize;
