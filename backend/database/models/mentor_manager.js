module.exports = (sequelize, DataTypes) => {
  const MentorManager = sequelize.define(
    'MentorManager',
    {
      mentor_manager_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
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
      tableName: 'mentor_managers',
      timestamps: true,
    }
  );

  MentorManager.associate = ({ User, Task }) => {
    MentorManager.belongsTo(User, {
      foreignKey: 'user_id',
    });
    MentorManager.hasMany(Task, {
      foreignKey: 'mentor_manger_id',
    });
  };

  return MentorManager;
};
