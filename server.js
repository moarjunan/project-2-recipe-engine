const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');


var db = require("./config/connection");

const dbModels = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  session({
    secret: process.env.SECRET, // Replace with a secret key
    resave: false,
    saveUninitialized: true,
  })
);


app.use(express.static('public'));
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



// app.get('/', function (req, res) {
//     res.render('home');
// });

app.use(routes);

db.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port http://localhost:${PORT}`);
    });
  });
