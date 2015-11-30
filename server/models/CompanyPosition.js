var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();


// add validation!!!
var CompanyPosition = sequelize.define('companyPosition', {
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
  },
  company: {
    type: Sequelize.INTEGER,
    field: "user_id"
  }
});

module.exports = CompanyPosition;