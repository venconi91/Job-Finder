var sequelize = require("./config").getSequelize();

module.exports = function(app){

	app.get("/home", function(req,res){

		res.send("home");
	})

	app.get("/partials/:partialFolder/:partialName", function(req, res){
	// get name + partialName
		var path = ""
		res.render(__dirname + path)
	})

	app.get("/", function(req,res){
		res.render("index");
	})

}