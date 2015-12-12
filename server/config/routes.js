var controllers = require("../controllers/indexController");
var auth = require("./auth");

module.exports = function(app){

	app.get("/home", function(req,res){

		res.send("home");
	})

	app.get("/partials/:partialFolder/:partialName", function(req, res){
		res.render('../../public/app/' + req.params.partialFolder + '/' + req.params.partialName)
	})
	
	// user applyings
	app.get("/api/applyings", controllers.applyings.getAllApplyings);
	app.post("/api/applyings", controllers.applyings.createApplying);

	// company applyings management
	//app.get("/api/allPositions", controllers.jobPositionController.getAllPositions);
	app.get("/api/myJobOffers", controllers.jobPositionController.getMyPositions);
	app.post("/api/myJobOffers", auth.isAuthenticated, controllers.jobPositionController.createPosition);

	app.get("/api/jobs", controllers.jobPositionController.getAllPositions);
	app.get("/api/jobs/search/", controllers.jobPositionController.getSearchedJobs)
	

	// auth
	app.post("/signup", auth.signup);
	app.post("/signin", auth.signin);
	app.post("/logout", auth.logout);
	app.get("/isAuthenticated", auth.isAuthenticated)

	// user
	app.post("/api/users", controllers.users.createUser)

	app.get("/api/users/:userId", function(){})

	app.get("*", function(req,res){
		res.render("index", {currentUser: req.user});
	})	
}