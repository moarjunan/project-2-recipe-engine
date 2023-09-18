module.exports = function(sequelize, DataTypes) {
    var Recipe = sequelize.define("Recipe", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      servings: DataTypes.INTEGER,
      ingredients: {
        type: DataTypes.JSON,
        allowNull: false
      },
      instructions: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      },
      image: DataTypes.TEXT('long'),
      category: DataTypes.STRING,
      dishType: DataTypes.STRING,
      source: DataTypes.STRING
    });
  
    Recipe.associate = function(models) {
      Recipe.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
        }
      });
      Recipe.belongsToMany(models.User, {
        as: "Saves",
        through: "Save"
      });
      Recipe.hasMany(models.Favorite);
    };
  
    return Recipe;
  };
  
  