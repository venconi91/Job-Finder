var models = require("../models");
var sequelize = require("./config").getSequelize();

module.exports = function (){
	syncModelsAndSync()
}

function syncModelsAndSync(){
	

	 // sequelize.dropAllSchemas().then(function(){

	 // 	sequelize.sync().then(function () {
	 //  		seedData()
	 // 	});
	 // })
	
	//models.User.sync();
	//models.JobPosition.sync();
	//models.Apply.sync();}
}

function seedData(){
	seedUsers();
	seedJobs();
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

  var obj2 = {
    "firstName": "go6o",
    "lastName": "go6ov",
    "email": "go6o@abv.bg",
    "username": "go6o",
    "password": "go6o"
  }
  var user2 = models.User.build(obj2);
  user2.salt = user2.makeSalt();
  user2.hashedPassword = user2.encryptPassword(obj2.password, user2.salt);
  user2.save();

}

function seedJobs(){
  console.log("asd")
	var obj = {
    "title": "java developer",
    "description": "we are looking for a java developer",
    "salary": 1234,
    "location": "sofia",
    "UserId": 1
  }

  var jobPosition = models.JobPosition.build(obj);
  jobPosition.save();

  var obj2 = {
    "title": "asp.net developer",
    "description": "we are looking for a asp.net developer",
    "salary": 1234,
    "location": "plovdiv",
    "UserId": 1
  }
  var jobPosition2 = models.JobPosition.build(obj2);
  jobPosition2.save();

  var obj3 = {
    "title": "javascript developer",
    "description": "we are looking for a javascript developer",
    "salary": 1234,
    "location": "plovdiv",
    "UserId": 1
  }
  var jobPosition3 = models.JobPosition.build(obj3);
  jobPosition3.save();

  var obj4 = {
    "title": "ruby developer",
    "description": "we are looking for a ruby developer",
    "salary": 1234,
    "location": "pernik",
    "UserId": 1
  }
  var jobPosition4 = models.JobPosition.build(obj4);
  jobPosition4.save();
}