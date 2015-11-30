var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();


var JobPosition = sequelize.define('JobPosition', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 30],
          msg: "Job Title Should be in interval [3, 30]"
        },
      }
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salary: {
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING
    }
});

//JobPosition.sync({force: true}).then(function(){

//})
// User.sync({force: true}).then(function () {
//   // Table created
  
//   var obj = {
//     "firstName": "venci first name",
//     "lastName": "venci last name",
//     "email": "venci@abv.bg",
//     "username": "venci",
//     "password": "venci",
//     "profileImageURL": "/images/test_avatar.jpg"
//   }
//   var user = User.build(obj);
//   user.salt = user.makeSalt();
//   user.hashedPassword = user.encryptPassword(obj.password, user.salt);
//   user.roles = "company"
//   user.save();
// });

module.exports = JobPosition;