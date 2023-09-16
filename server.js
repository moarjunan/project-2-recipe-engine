const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


var db = require("./config/connection");

const dbModels = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;


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
