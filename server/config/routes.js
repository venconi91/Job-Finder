var controllers = require("../controllers/indexController");
var auth = require("./auth");

module.exports = function(app){

	app.get("/home", function(req,res){

		res.send("home");
	})

	app.get("/partials/:partialFolder/:partialName", function(req, res){
		res.render('../../public/app/' + req.params.partialFolder + '/' + req.params.partialName)
	})
	
	app.get("/api/allApplyings", controllers.applyings.getAllApplyings);
	app.post("/api/createApplying", controllers.applyings.createApplying);

	app.get("/api/allPositions", controllers.jobPositionController.getAllPositions);
	app.get("/api/myJobOffers", controllers.jobPositionController.getMyPositions);
	app.post("/api/myJobOffers", auth.isAuthenticated, controllers.jobPositionController.createPosition);

	

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