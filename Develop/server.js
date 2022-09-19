// Require express
const express = require('express');
// Require API routes
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
// Variable for express
const app = express();
// Set up port
const PORT = process.env.PORT || 3001;
// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Reqire routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});