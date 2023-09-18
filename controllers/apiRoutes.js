var express = require("express");

var router = express.Router();

var db = require("../models");

const { Op } = require("sequelize");


router.post("/api/newrecipe", (req, res) => {
  if (!req.body) {
    res.status("400").send("req body is required.");
    return;
  }
  db.Recipe.create(req.body).then(function () {
    res.status(200).end();
  });
});


router.get("/api/saved/:userId", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.userId
    }
  })
    .then(function (user) {
      return (recipes = user.getSaves());
    })
    .then(function (recipes) {
      res.json(recipes);
    });
});


router.post("/api/save/:userId/:recipeId", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.userId
    }
  }).then(function(user) {
    user.addSaves(req.params.recipeId);
    res.status(200).send("save was successful");
  });
});


router.get("/api/recipe/:id", (req, res) => {
  db.Recipe.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (recipe) {
    res.json(recipe);
  });
});


router.put("/api/note", (req, res) => {
  db.Favorite.upsert({
    note: req.body.note,
    RecipeId: req.body.RecipeId,
    UserId: req.body.UserId
  }).then(function (result) {
    if (result) {
      res.status(200).send("successfully updated");
    } else {
      res.status(200).send("successfully stored");
    }
  });
});


router.delete("/api/note/:id", (req, res) => {
  db.Favorite.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.status(200).send("note deleted");
  });
});

router.get("/api/note/:id", (req, res) => {
  db.Favorite.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (note) {
    res.json(note);    
  });
});

router.get("/api/note/:recipeId/:userId", (req, res) => {
  db.Favorite.findOne({
    where: {
      [Op.and]: [
        {
          RecipeId: req.params.recipeId
        },
        {
          UserId: req.params.userId
        }
      ]
    }
  }).then(function (note) {
    res.json(note);
  });
});



router.get("/api/search/:keyword", (req, res) => {
  var keyword = "%" + req.params.keyword + "%";
  console.log(req.params.keyword);
  db.Recipe.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: keyword
          }
        },
        {
          category: {
            [Op.like]: keyword
          }
        }
      ]
    }
  }).then(function (recipes) {
    res.json(recipes);
  });
});

module.exports = router;
