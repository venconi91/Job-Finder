var passport = require('passport');
var User = require("../models/User");

module.exports = {
    signin: function(req, res, next) {
      console.log("vliza signin")
      passport.authenticate('local', function(err, user, info) {
console.log("ta6aciiiiiiiiiiiiiiiiiiiiiiiiii")
        if (err || !user) {
          res.status(400).send(info);
        } else {
          // Remove sensitive data before login
          user.password = undefined;
          user.salt = undefined;

          req.login(user, function(err) {
            if (err) {
              res.status(400).send(err);
            } else {
              res.json(user);
            }
          });
        }
      })(req, res, next);
    },
    logout: function(req, res, next) {
        req.logout();
        res.end();
        // redirect res.redirect('/');
    },
    signup: function(req, res) {
      // For security measurement we remove the roles from the req.body object
      delete req.body.roles;

      var user = User.build(req.body);

      //user.provider = 'local';
      user.salt = user.makeSalt();
      user.hashedPassword = user.encryptPassword(req.body.password, user.salt);
      //user.displayName = user.firstName + ' ' + user.lastName;

      //MUST DELETE THIS WHEN PRODUCTION
      if (req.body.is_admin === true) {
        user.roles = ["admin", "user"];
      } else {
        user.roles = ["user"];
      }

      user.save().then(function() {
        req.login(user, function(err) {
          if (err)
            //return next(err);
            res.status(400).send(err);
          res.json(user);
        });
      }).catch(function(err) {
        res.status(400).send(err);
      });
    },
    // isAuthenticated: function(req, res){
    //   var is = req.isAuthenticated();
    //   res.send({"isAuthenticated": is})
    // },
    isAuthenticated: function(req, res, next) {
        if (!req.isAuthenticated()) {
            res.status(403);
            res.end();
        }
        else {
            next();
        }
    },
    isInRole: function(role) {
        return false;
    }
}