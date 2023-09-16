
// const Favorite = require('./favorites');
// const Recipe = require('./recipe');
// const User = require('./user');
// const Rating = require('./rating');



// Recipe.belongsToMany(Favorite, {
//   // Define the third table needed to store the foreign keys
//   foreignKey : "recipe_id",
//   through: {
//     model: User,
//     unique: false
//   }
// });

// User.belongsToMany(Favorite, {
//   // Define the third table needed to store the foreign keys
//   foreignKey : "favorite_username",
//   through: {
//     model: Recipe,
//     unique: false
//   }
// });

// Rating.belongsToMany(Recipe, {
//   // Define the third table needed to store the foreign keys
//   foreignKey : "recipe_id",
//   through: {
//     model: User,
//     unique: false
//   }
// });


// module.exports = { Favorite, Recipe, User, Rating};
const Favorite = require('./favorites');
const Recipe = require('./recipe');
const User = require('./user'); // Use User instead of Users
const Rating = require('./rating');

Recipe.belongsToMany(Favorite, {
  foreignKey: "recipe_id",
  through: {
    model: User, // Use User instead of Users
    unique: false
  }
});

User.belongsToMany(Favorite, {
  foreignKey: "favorite_username",
  through: {
    model: Recipe, // Use Recipe instead of Recipes
    unique: false
  }
});

Rating.belongsToMany(Recipe, {
  foreignKey: "recipe_id",
  through: {
    model: User, // Use User instead of Users
    unique: false
  }
});

module.exports = { Favorite, Recipe, User, Rating };



