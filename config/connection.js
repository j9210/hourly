// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();
console.log(process.env.DB_NAME, process.env.DB_PW, process.env.DB_USER)
// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;