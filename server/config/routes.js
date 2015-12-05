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
	app.post("/api/createPosition", auth.isAuthenticated, controllers.jobPositionController.createPosition);

	app.get("/", function(req,res){
		res.render("index");
	})

	//app.post("/login", auth.login)
	

	// auth
	app.post("/signup", auth.signup);
	app.post("/signin", auth.signin);
	app.post("/logout", auth.logout);
	app.get("/isAuthenticated", auth.isAuthenticated)


	// user
	app.post("/api/users", controllers.users.createUser)

	app.get("/api/users/:userId", function(){
		
	})
}