/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('settings', {
      setting_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      show_linkedin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      show_twitter: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      show_instagram: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      show_github: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      show_contact_info: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_program_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_task_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_approval_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_report_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_post_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_comment_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_comment_on_my_post_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_mention_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email_direct_message_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_program_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_task_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_approval_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_report_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_post_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_comment_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_comment_on_my_post_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_mention_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      in_app_direct_message_notification: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('settings');
  },
};
