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

	app.get("/api/allPositions", controllers.companyPosition.getAllPositions);
	app.post("/api/createPosition", controllers.companyPosition.createPosition);

	app.get("/", function(req,res){
		res.render("index");
	})

	app.post("/login", auth.login)
	app.post("/logout", auth.logout)
	app.post("/signup", auth.signup)
	app.get("/isAuthenticated", auth.isAuthenticated)


	// user
	app.post("/api/users", controllers.users.createUser)
}