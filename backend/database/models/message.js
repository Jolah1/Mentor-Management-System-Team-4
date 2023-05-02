module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'Message',
    {
      message_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sender_id: {
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
      tableName: 'messages',
      timestamps: true,
    }
  );

  Message.associate = ({ User, Conversation }) => {
    Message.belongsTo(User, {
      foreignKey: 'sender_id',
    });
    Message.belongsTo(Conversation, {
      foreignKey: 'conversation_id',
    });
  };

  return Message;
};
