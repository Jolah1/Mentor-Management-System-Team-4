/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('credentials', {
      credential_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      login_type: {
        type: Sequelize.STRING,
        defaultValue: 'local',
      },
      hashed_password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('credentials');
  },
};
