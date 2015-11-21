var express = require("express");
var http = require('http')
//var jade = require("jade");

//var Sequelize = require("sequelize");


var port = 3000;

var express = require("express");
var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require("./server/config/config");
config.setEnv(env);

require("./server/config/express")(app, config);

//require("./server/config/passport")(); 
require("./server/config/routes")(app);


app.listen(port);
console.log("app listen on port: " + port)