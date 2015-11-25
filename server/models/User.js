var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();
var crypto = require("crypto");

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
    "username": "venci",
    "password": "venci"
  }
  var user = User.build(obj);
  user.salt = user.makeSalt();
  user.hashedPassword = user.encryptPassword(obj.password, user.salt);
  user.save();

});

module.exports = User;