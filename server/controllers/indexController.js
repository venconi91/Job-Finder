var usersController = require("./usersController");
var applyingsController = require("./applyingsController");
var jobPositionController = require("./jobPositionController");
var eventsController = require("./eventsController")

module.exports = {
	users: usersController,
	applyings: applyingsController,
	jobPositionController: jobPositionController,
	eventsController: eventsController
}