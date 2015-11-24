var User = require("../models/User");

module.exports = {
	createUser: function (req, res) {
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
          res.json(user);                 // remove salt and hashed password properties 
        });
      }).catch(function(err) {
        res.status(400).send(err);
      });
    },
    updateUser: function (req, res) {
        
    },
    getAllUsers: function (req, res) {
        
    },
    deleteUser: function(req, res) {
        
    }
}