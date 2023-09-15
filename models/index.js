
const Favorite = require('./favorites');
const Recipe = require('./recipe');
const Users = require('./user');
const Rating = require('./rating');



Recipe.belongsToMany(Favorite, {
  // Define the third table needed to store the foreign keys
  foreignKey : "recipe_id",
  through: {
    model: Users,
    unique: false
  }
});

Users.belongsToMany(Favorite, {
  // Define the third table needed to store the foreign keys
  foreignKey : "favorite_username",
  through: {
    model: Recipe,
    unique: false
  }
});

Rating.belongsToMany(Recipe, {
  // Define the third table needed to store the foreign keys
  foreignKey : "recipe_id",
  through: {
    model: Users,
    unique: false
  }
});


module.exports = { Favorite, Recipe, Users, Rating};


