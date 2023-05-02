module.exports = (sequelize, DataTypes) => {
  const Credential = sequelize.define(
    'Credential',
    {
      credential_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      hashed_password: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      login_type: {
        type: DataTypes.STRING(10),
        allowNull: true,
        default: 'local',
      },
      user_id: {
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false,
      },
    },
    {
      underscore: true,
      tableName: 'credentials',
      timestamps: false,
    }
  );

  Credential.associate = ({ User }) => {
    Credential.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };

  return Credential;
};
