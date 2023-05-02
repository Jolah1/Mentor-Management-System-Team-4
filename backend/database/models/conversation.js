module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define(
    'Conversation',
    {
      conversation_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: 'conversations',
      timestamps: true,
    }
  );

  Conversation.associate = ({ Message, Participant }) => {
    Conversation.hasMany(Message, {
      foreignKey: 'conversation_id',
    });
    Conversation.hasMany(Participant, {
      foreignKey: 'conversation_id',
    });
  };
  return Conversation;
};
