module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      content: {
        allowNull: false,
        type: DataTypes.JSON,
        defaultValue: {},
      },
      comments: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
      },
      likes: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.STRING,
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
    return queryInterface.dropTable('Posts');
  },
};
