// Require sequelize
const Sequelize = require('sequelize');
// Require dotenv
require('dotenv').config();
// create new sequelize connection
let sequelize;
// connect to JAWSDB if deployed, otherwise connect to local database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // .env file variables
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
// Export sequelize
module.exports = sequelize;