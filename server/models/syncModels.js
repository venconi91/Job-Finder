var Sequelize = require("sequelize");
var sequelize = require("../config/config").getSequelize();

var User = require("./User")
var Apply = require("./Apply")
var JobPosition = require("./JobPosition")

module.exports = function(env){
	// prevent drop tables when production
	if (env === "production") {
		return false;
	}

	Apply.sync({force: true}).then(function(){});
	User.sync({force: true}).then(function(){});
	JobPosition.sync({force: true}).then(function(){});
	 //return false;
	sequelize.sync({force:true});
	//return false;
	createWithSeed();
}

function createWithSeed(){
	User.hasMany(Apply);

	User.sync({force: true}).then(function(){
		var obj = {
			"firstName": "venci first name",
			"lastName": "venci last name",
			"email": "venci@abv.bg",
			"username": "venci",
			"password": "venci",
			"profileImageURL": "/images/test_avatar.jpg"
		}
		var user = User.build(obj);
		user.salt = user.makeSalt();
		user.hashedPassword = user.encryptPassword(obj.password, user.salt);
		user.roles = "company"
		user.save();

		JobPosition.hasOne(Apply);
		JobPosition.sync({force: true}).then(function(){
			Apply.hasOne(User);
			Apply.hasOne(JobPosition);

			Apply.sync({force: true}).then(function () {})
		})
	})
}