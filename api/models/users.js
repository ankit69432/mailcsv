const connnection = require("../db/db");
const { DataTypes } = require("sequelize");

const users = connnection.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allwowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allwowNull: false,
  },
});

module.exports = users;
