module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define(
    'Setting',
    {
      setting_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      show_linkedin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      show_twitter: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      show_instagram: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      show_github: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      show_contact_info: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_program_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_task_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_approval_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_report_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_post_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_comment_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_comment_on_my_post_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_mention_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email_direct_message_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_program_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_task_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_approval_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_report_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_post_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_comment_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_comment_on_my_post_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_mention_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      in_app_direct_message_notification: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscore: true,
      tableName: 'settings',
      timestamps: true,
    }
  );

  return Setting;
};
