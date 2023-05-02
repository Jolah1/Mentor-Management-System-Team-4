module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gitHub: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedIn: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING,
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
      tableName: 'users',
      underscore: true,
      timestamps: true,
    }
  );

  User.associate = ({ Credential, Program, Invite, Mentor, MentorManager, Report, Notification, Message, Participant }) => {
    User.hasOne(Credential, {
      foreignKey: 'user_id',
    });
    User.hasMany(Program, {
      foreignKey: 'created_by',
    });
    User.hasMany(Invite, {
      foreignKey: 'user_id',
    });
    User.hasMany(Mentor, {
      foreignKey: 'user_id',
    });
    User.hasMany(MentorManager, {
      foreignKey: 'user_id',
    });
    User.hasMany(Report, {
      foreignKey: 'user_id',
    });
    User.hasMany(Notification, {
      foreignKey: 'user_id',
    });
    User.hasMany(Message, {
      foreignKey: 'sender_id',
    });
    User.hasMany(Participant, {
      foreignKey: 'user_id',
    });
  };

  return User;
};
