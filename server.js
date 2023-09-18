var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var authRoutes = require("./controllers/loginRoutes");
var apiRoutes = require("./controllers/apiRoutes");
var htmlRoutes = require("./controllers/htmlRoutes");
var db = require("./models");
const exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


app.use(
  session({
    secret: "secret", 
    resave: true,
    saveUninitialized: true,
  })
);



app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static("public"));


app.use(authRoutes);
app.use(apiRoutes);
app.use(htmlRoutes);

require("./config/passport.js")(passport, db.User);

var syncOptions = { force: false };



db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
module.exports = app;