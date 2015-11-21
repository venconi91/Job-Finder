var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

var Sequelize = require("sequelize");
// check if it should be singleton!!!
var sequelize = new Sequelize('testmysqlnode', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = {
	_environment: "",
	development: {
		sequelize: sequelize,
		rootPath: rootPath
	},
	production: {
		sequelize: sequelize, // change this to production instance of sequelize
		rootPath: rootPath
	},
	getConfig: function(){
		return this[this._environment];
	},
	setEnv: function(environment){
		this._environment = environment;
	},
	getSequelize: function(){
		return this[this._environment].sequelize;
	}
}

