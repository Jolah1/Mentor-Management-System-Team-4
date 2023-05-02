module.exports = (sequelize, DataTypes) => {
  const Mentor = sequelize.define(
    'Mentor',
    {
      mentor_id: {
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
      tableName: 'mentors',
      timestamps: true,
    }
  );

  Mentor.associate = ({ User, Task }) => {
    Mentor.belongsTo(User, {
      foreignKey: 'user_id',
    });
    Mentor.hasMany(Task, {
      foreignKey: 'mentor_id',
    });
  };

  return Mentor;
};
