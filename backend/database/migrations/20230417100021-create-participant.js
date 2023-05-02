/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('participants', {
      participant_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      conversation_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'conversations',
          key: 'conversation_id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('participants');
  },
};
