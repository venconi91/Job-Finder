var express = require("express");
//var jade = require("jade");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = 3000;

var app = express();
app.set("view engine", "jade");
app.set("views", __dirname + "/server/views");

app.use(express.static(__dirname + "/public"))
app.use(session({
  secret: 'unresolved password secred'
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());


app.get("/home", function(req,res){

	res.send("home");
})

app.get("/", function(req,res){

	res.render("index");
})


app.listen(port);
console.log("app listen on port: " + port)