module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      note: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    Favorite.associate = function(models) {
      Favorite.belongsTo(models.Recipe, {
        foreignKey: {
          unique: "uniqueFavorite"
        }
      });
      Favorite.belongsTo(models.User, {
        foreignKey: {
          unique: "uniqueFavorite"
        }
      }); 
    };
  
    return Favorite;
  };
  