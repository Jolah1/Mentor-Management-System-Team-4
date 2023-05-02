module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define(
    'Invite',
    {
      invite_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      tableName: 'invites',
      timestamps: true,
    }
  );

  Invite.associate = ({ User }) => {
    Invite.belongsTo(User, {
      foreignKey: 'user_id',
    });
  };

  return Invite;
};
