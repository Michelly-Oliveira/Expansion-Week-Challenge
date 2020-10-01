const Sequelize = require('sequelize');
const db = require('../../../../../shared/infra/sequelize');

const Post = db.define('Post', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
  },
  user_id: {
    allowNull: false,
    type: Sequelize.UUID,
  },
  content: {
    allowNull: false,
    type: Sequelize.JSON,
    defaultValue: {},
  },
  comments: {
    allowNull: false,
    type: Sequelize.ARRAY(Sequelize.JSON),
    defaultValue: [],
  },
  likes: {
    allowNull: false,
    type: Sequelize.ARRAY(Sequelize.JSON),
  },
  date: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

module.exports = Post;
