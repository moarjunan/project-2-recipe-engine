var express = require("express");
var router = express.Router();
var db = require("../models");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/dashboard", isLoggedIn, function(req, res) {
  var user = {
    name: req.user
  };
  res.render("dashboard", user);
});

router.get("/user", isLoggedIn, function(req, res) {
  console.log(req.user);
  res.json(req.user);
});

router.get("/", (req, res) => {
  db.Recipe.findAll({
    order: db.sequelize.random(),
    limit: 3
  }).then(function(recipes) {
    var hbsObject = {
      recipes: recipes
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/save", (req, res) => {
  res.render("save");
});

router.get("/recipe", (req, res) => {
  res.render("recipe");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("*", (req, res) => {

  res.render("404");
});

module.exports = router;
