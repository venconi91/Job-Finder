var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();


// add validation!!!
var Apply = sequelize.define('apply', {
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
  user: {
    type: Sequelize.INTEGER,
    field: "user_id"
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

// Apply.sync({force: true}).then(function () {
//   // Table created
//    Apply.create({
//     title: 'nodejs developer',
//     description: 'i am looking dor a job ',
//     salary: 1234,

//   });
//   Apply.create({
//     title: 'java developer',
//     description: 'i am looking for a job',
//     salary: 4321,
//     user: 13
//   });
// });

module.exports = Apply;
