var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require("passport");
var favicon = require("serve-favicon");

module.exports = function(app, config){
	var config = config.getConfig();
	app.use(favicon(config.rootPath + '/public/images/favicon.png'));
	
	app.set("view engine", "jade");
	app.set("views", config.rootPath + "/server/views");

	app.use(express.static(config.rootPath + "/public"))
	app.use(session({
	  secret: 'unresolved password secred'
	}));
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	app.use(cookieParser());
	app.use(passport.initialize());
	app.use(passport.session());
}