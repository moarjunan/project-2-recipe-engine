const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  class Users extends Model {}

  Users.init({
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
    modelName: 'User',
  });

  module.exports = Users;
