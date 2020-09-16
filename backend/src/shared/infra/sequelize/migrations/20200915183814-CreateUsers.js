module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        // By default, Sequelize assumes the default value is NULL
        type: DataTypes.STRING,
      },
      following: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.UUID),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Users');
  },
};
