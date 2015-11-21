var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

module.exports = function(app, config){
	var config = config.getConfig();
	app.set("view engine", "jade");
	app.set("views", config.rootPath + "/server/views");

	app.use(express.static(config.rootPath + "/public"))
	app.use(session({
	  secret: 'unresolved password secred'
	}));
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(cookieParser());
}