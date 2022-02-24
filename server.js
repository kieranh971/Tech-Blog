const path = require('path');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const sequelize = require('./config/connection');
const helpers = require("./utils/helpers");

// Server config for handlebars and custom helper
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// Start session with cookies
const sess = {
  secret: "change later",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Express set up
const app = express();
const PORT = process.env.PORT || 3001;

// Express aoo handle data parsing
app.use(session(sess));

// Uses handlebars as default template
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
const routes = require("./controllers");
app.use(routes);

// Init server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});