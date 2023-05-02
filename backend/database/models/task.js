module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    'Task',
    {
      task_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mentor_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      mentor_manager_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.fn('NOW'),
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscore: true,
      tableName: 'tasks',
      timestamps: true,
    }
  );

  Task.associate = ({ Mentor, MentorManager }) => {
    Task.belongsTo(Mentor, {
      foreignKey: 'mentor_id',
    });
    Task.belongsTo(MentorManager, {
      foreignKey: 'mentor_manager_id',
    });
  };

  return Task;
};
