// Sequelize refers to the library itself
const Sequelize = require('sequelize');

const config = require('./config/database');

// sequelize refers to an instance of Sequelize, which represents a connection to a database
const sequelize = new Sequelize(config);

module.exports = sequelize;
