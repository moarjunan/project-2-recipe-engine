const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: 'userName',
      validate: {
        len: [4]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4]
    }
    ,
    indianLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    indianDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    italianLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    italianDislike: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }

  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;

