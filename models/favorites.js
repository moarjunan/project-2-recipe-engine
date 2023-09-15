const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  { username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: 'userName',
    validate: {
      len: [4]
    }
    },
    ID: DataTypes.INTEGER,
    cuisine: DataTypes.STRING,
    Ingedients: DataTypes.STRING
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite'
  }
);

module.exports = Favorite;
