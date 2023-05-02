module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define(
    'Participant',
    {
      participant_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      conversation_id: {
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
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      underscore: true,
      tableName: 'participants',
      timestamps: true,
    }
  );

  Participant.associate = ({ User, Conversation }) => {
    Participant.belongsTo(User, {
      foreignKey: 'user_id',
    });
    Participant.belongsTo(Conversation, {
      foreignKey: 'conversation_id',
    });
  };

  return Participant;
};
