const sequelize = require('../config/connection');
const { Recipe, Rating, Users, Favorite } = require('../models');

const recipeSeedData = require('./recipe-data.json');
const userSeedData = require('./user-data.json');



const seedDatabase = async () => {

    // Add the `await` keyword infront of the expressions inside the `async` function.
    await sequelize.sync({ force: true });
  
    // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
    await Recipe.bulkCreate(recipeSeedData);
    await Users.bulkCreate(userSeedData);
  
    process.exit(0);
  };
  
  seedDatabase();
  