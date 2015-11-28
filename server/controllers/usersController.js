var User = require("../models/User");

module.exports = {
	createUser: function (req, res) {
        // For security measurement we remove the roles from the req.body object
      delete req.body.roles;

      var user = User.build(req.body);

      user.salt = user.makeSalt();
      user.hashedPassword = user.encryptPassword(req.body.password, user.salt);
      req.body.isCompany === true ? user.roles = "company" : "";

      user.save().then(function() {
        req.login(user, function(err) {
          if (err)
            //return next(err);
            res.status(400).send(err);
          res.json(user);           // remove salt and hashed password properties 
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