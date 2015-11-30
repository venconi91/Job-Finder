var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();
var crypto = require("crypto");

var JobPosition = require("./JobPosition");
var Apply = require("./Apply");

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
    roles: {
      type: Sequelize.STRING,
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


module.exports = User;