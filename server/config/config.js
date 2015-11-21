var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')
var Sequelize = require("sequelize");

module.exports = {
	_environment: "",
	_sequelize: "",
	development: {
		sequelize: this._sequelize,
		rootPath: rootPath
	},
	production: {
		sequelize: this._sequelize,
		rootPath: rootPath
	},
	getConfig: function(){
		return this[this._environment];
	},
	getSequelize: function(){
		return this._sequelize;
	},
	init: function(environment){
		this._environment = environment;
		this._sequelize = initSequelize(environment);
	}
}

function initSequelize(environment){
	var sequelizeEnv = sequelizeEnvironments[environment];
	var sequelize = new Sequelize(sequelizeEnv.db, sequelizeEnv.user, sequelizeEnv.password, {
	  host: sequelizeEnv.host,
	  dialect: sequelizeEnv.dialect,
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  },
	});

	return sequelize;
}

var sequelizeEnvironments = {
	development: {
		db: "testmysqlnode",
		user: "root",
		password: "",
		host: "localhost",
		dialect: 'mysql'
	},
	production: {
		db: "productionDB",
		user: "productionUser",
		password: "productionPassword",
		host: "productionHost",
		dialect: 'mysql'
	}
}