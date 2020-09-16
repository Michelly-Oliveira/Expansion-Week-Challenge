const Sequelize = require('sequelize');
const db = require('../../../../../shared/infra/sequelize');

const User = db.define('User', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  name: {
    allowNull: false,
    unique: true,
    type: Sequelize.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: Sequelize.STRING,
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  avatar: {
    // By default, Sequelize assumes the default value is NULL
    type: Sequelize.STRING,
  },
  following: {
    allowNull: false,
    type: Sequelize.ARRAY(Sequelize.UUID),
  },
});

module.exports = User;
