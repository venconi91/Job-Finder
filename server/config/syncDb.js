var models = require("../models");
var sequelize = require("./config").getSequelize();

module.exports = function (){
	syncModelsAndSync()
}

function syncModelsAndSync(){
	

	 sequelize.dropAllSchemas().then(function(){

	 	sequelize.sync().then(function () {
	  		seedData()
	 	});
	 })
	//sequelize.dropAllSchemas();
	//models.User.sync();
	//models.JobPosition.sync();
	//models.Apply.sync();
}

function seedData(){
	seedUsers()

}

function seedUsers(){
	var obj = {
      "firstName": "venci first name",
      "lastName": "venci last name",
      "email": "venci@abv.bg",
      "username": "venci",
      "password": "venci",
      "profileImageURL": "/images/test_avatar.jpg"
    }
    var user = models.User.build(obj);
    user.salt = user.makeSalt();
    user.hashedPassword = user.encryptPassword(obj.password, user.salt);
    user.roles = "company"
    user.save();
}