/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      bio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      website: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_type: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      gitHub: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      instagram: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      twitter: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
