module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    'Report',
    {
      report_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
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
      tableName: 'reports',
      timestamps: true,
    }
  );

  Report.associate = ({ User }) => {
    Report.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };

  return Report;
};
