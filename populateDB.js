var populate = function(db) {
    db.User.bulkCreate([
        { firstName: "test1", lastName: "user1", email: "test1@gmail.com", userName: "test1", password: "$2a$12$aig4l09WWyFuU60goc5x2O4hBZ0F5/Oqgcm.c0z/a2OXL2hsR/8ny" },
        { firstName: "test2", lastName: "user2", email: "test2@gmail.com", userName: "test2", password: "$2a$12$np6PYgroSWLPekdqxdZZCuA.WnCo.94isMpC6Oyz5WbmWKx15Wvt6" },
        { firstName: "test3", lastName: "user3", email: "test3@gmail.com", userName: "test3", password: "$2a$12$sWE4zDMEmruVYvktMUCMQ.0pjfFvh/tTeS3Hr08JhzMczUZymAZQy" }
    ]);

    db.Recipe.bulkCreate(
        [
          {
            title: "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
            servings: 2,
            category: "Asian",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"} ,
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://glebekitchen.com/wp-content/uploads/2017/03/koreangrilledchickenfront.jpg"
        },
          {
            title: "Thanksgiving Mac and Cheese",
            servings: 2,
            category: "American",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://thebakermama.com/wp-content/uploads/2014/09/IMG_1588-scaled.jpg"
        },
          {
            title: "Italian Sausage and Bread Stuffing",
            servings: 2,
            category: "Italian",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://www.justalittlebitofbacon.com/wp-content/uploads/2015/10/bread-and-sausage-stuffing-3.jpg"
        },
          {
            title: "Spiced Lentil and Caramelized Onion Baked Eggs",
            servings: 2,
            category: "Mediterranean",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://assets.epicurious.com/photos/5f92dafeeddde6da9389a5aa/1:1/w_2560%2Cc_limit/IMG_7446_HERO_VOG_final.jpg"
          },
          {
            title: "Caesar Salad Roast Chicken",
            servings: 2,
            category: "American",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://assets.bonappetit.com/photos/624215f8a76f02a99b29518f/1:1/w_2800,h_2800,c_limit/0328-ceasar-salad-lede.jpg"
          },
          {
            title: "Chicken and Rice With Leeks and Salsa Verde",
            servings: 2,
            category: "Mexican",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://assets.bonappetit.com/photos/5f29796456f43685a49327fb/1:1/w_2560%2Cc_limit/Chicken-and-Rice-With-Leeks-Salsa-Verde-01.jpg"
          },
          {
            title: "Baigan Chokha",
            servings: 2,
            category: "Indian",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://thatgirlcookshealthy.com/wp-content/uploads/2020/05/baigan-choka-image.jpg"
          },
          {
            title: "Mango Curry",
            servings: 2,
            category: "Indian",
            ingredients: {"ingredient_0":"1 cup evaporated milk", "ingredient_1":"1 cup whole milk","ingredient_2":"1 tsp. garlic powder","ingredient_3":"1 tsp. onion powder","ingredient_4":"1 tsp. smoked paprika","ingredient_5":"Â½ tsp. freshly ground black pepper","ingredient_6":"1 tsp. kosher salt", "ingredient_8":"2 lb. extra-sharp cheddar", "ingredient_9":"4 oz. full-fat cream cheese", "ingredient_10":"1 lb. elbow macaroni"},
            instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://www.connoisseurusveg.com/wp-content/uploads/2022/05/mango-curry-sq-1.jpg"
          }
      ]);

  };
  exports.populate = populate;