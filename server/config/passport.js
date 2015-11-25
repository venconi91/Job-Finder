var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require("../models/User")
    //User = require('mongoose').model('User');

module.exports = function() {
    
    passport.use(new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, done) {
          User.findOne({
            attributes: ['id', 'username', 'displayName', 'email', 'profileImageURL', 'roles'],
            where: {
              username: username.toLowerCase()
            }
          }).then(function(user) {
            if (!user) {
              return done(user);
            }
            if (!user || !user.authenticate(password)) {
              return done(null, false, {
                message: 'Invalid username or password'
              });
            }
            return done(null, user);
          });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) { // from sean
        User.findOne({
          //attributes: ['id', 'displayName', 'email', 'profileImageURL', 'roles', 'additionalProvidersData'],
          where: {
            id: id
          }
        }).then(function(user) {
            //case 1: done(true,user) ;
            // case 2: done(false, null) 
          var err = (!user) ? true : false; 
          done(err, user);
        });
    });
}