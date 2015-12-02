var express = require("express");
var http = require('http');
var port = 3000;

var express = require("express");
var app = express();

var env = process.env.NODE_ENV || 'development';
var config = require("./server/config/config");
config.init(env);
require("./server/config/syncDb")();

require("./server/config/express")(app, config);

require("./server/config/routes")(app);
require("./server/config/passport")();

app.listen(port, function() {
    console.log("app listen on port: " + port)
});