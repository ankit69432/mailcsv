const { Sequelize } = require("sequelize");

const con = new Sequelize("csv", "ankit", "", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = con;
