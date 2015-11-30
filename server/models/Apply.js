var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();

var User = require("./User");

// add validation!!!
var Apply = sequelize.define('Apply', {
  title: {
    type: Sequelize.STRING,
    field: 'title', // Will result in an attribute that is firstName when user facing but first_name in the database
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    field: 'description'
  },
  salary: {
    type: Sequelize.INTEGER,
    field: 'salary'
  }
});

module.exports = Apply;
