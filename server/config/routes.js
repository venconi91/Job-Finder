var controllers = require("../controllers/indexController");

module.exports = function(app){

	app.get("/home", function(req,res){

		res.send("home");
	})

	app.get("/partials/:partialFolder/:partialName", function(req, res){
	// get name + partialName
		var path = ""
		res.render(__dirname + path)
	})
	
	app.get("/api/allApplyings", controllers.applyings.getAllApplyings);
	app.post("/api/createApplying", controllers.applyings.createApplying);

	app.get("/api/allPositions", controllers.companyPosition.getAllPositions);
	app.post("/api/createPosition", controllers.companyPosition.createPosition);

	app.get("/", function(req,res){
		res.render("index");
	})

}