var passport = require('passport');
var User = require("../models/User");

module.exports = {
    login: function(req, res, next) {
        var auth = passport.authenticate('local', function(err, user) {
            if (err) return next(err);
            if (!user) {
                res.send({success: false})
            }

            req.logIn(user, function(err) {
                if (err) return next(err);
                res.send({success: true, user: user});
            })
        });

        auth(req, res, next);
    },
    signin: function(req, res, next) {

      passport.authenticate('local', function(err, user, info) {

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

      var message = null;

      var user = User.build(req.body);

      user.provider = 'local';
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
        console.log("vlizaaaaaaaaaaaaaaaaaaaaaaaaa")
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