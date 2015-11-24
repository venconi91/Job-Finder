var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();
var crypto = require("crypto");

// var User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING,
//     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   freezeTableName: true // Model tableName will be the same as the model name
// });

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });
function validateLocalStrategyProperty(property) {
  if (((this.provider !== 'local' && !this.updated) || property.length !== 0) === false) {
    throw new Error('Local strategy failed');
  }
};
function validateLocalStrategyPassword(password) {
  if ((this.provider !== 'local' || (password && password.length > 6)) === false) {
    throw new Error('One field is missing');
  }
};
var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      validate: {
        len: {
          args: [1, 30],
          msg: "First name title must be between 1 and 30 characters in length"
        },
      }
    },
    // lastName: {
    //   type: Sequelize.STRING
    // },
    displayName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Please fill a valid email address'
        }
      }
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    profileImageURL: Sequelize.STRING,
    hashedPassword: {
      type: Sequelize.STRING,
    },
    salt: Sequelize.STRING
  }, {
    instanceMethods: {
      makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
      },
      authenticate: function(plainText) {
        return this.encryptPassword(plainText, this.salt) === this.hashedPassword;
      },
      encryptPassword: function(password, salt) {
        if (!password || !salt)
          return '';
        salt = new Buffer(salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
      }
    }
  });


User.sync({force: true}).then(function () {
  // Table created
  
  var obj = {
    "firstName": "venci first name",
    "lastName": "venci last name",
    "email": "venci@abv.bg",
    "username": "venci username",
    "password": "venci password"
  }
  var user = User.build(obj);
  user.salt = user.makeSalt();
  user.hashedPassword = user.encryptPassword(obj.password, user.salt);
  user.save();

});

module.exports = User;