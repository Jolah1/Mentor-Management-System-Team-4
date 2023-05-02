module.exports = (sequelize, DataTypes) => {
  const Label = sequelize.define(
    'Label',
    {
      label_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
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
      tableName: 'labels',
      timestamps: true,
    }
  );

  Label.associate = ({ Mentor, MentorManager }) => {
    Label.belongsTo(Mentor, {
      foreignKey: 'mentor_id',
    });
    Label.belongsTo(MentorManager, {
      foreignKey: 'mentor_manger_id',
    });
  };

  return Label;
};
