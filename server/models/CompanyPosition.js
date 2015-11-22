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
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// CompanyPosition.sync({force: true}).then(function () {
//   // Table created
//    CompanyPosition.create({
//     title: 'nodejs developer',
//     description: 'we are looking for nodejs dev',
//     salary: 1234,

//   });
//   CompanyPosition.create({
//     title: 'searching for java developer',
//     description: 'we are looking for java dev',
//     salary: 4321,
//     user: 13
//   });
// });

module.exports = CompanyPosition;