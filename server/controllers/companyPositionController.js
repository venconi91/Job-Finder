var sequelize = require("../config/config").getSequelize();
var companyPosition = require("../models/CompanyPosition");

// catch possible errors!!!
module.exports = {
	createPosition: function (req, res) {
        companyPosition.create({
			title: 'create position title test POST',
			description: 'description test POST',
			salary: 4321,
			user: 1
		}).then(function(applying){
			res.send(applying);
		})
    },
    updatePosition: function (req, res) {
        
    },
    getAllPositions: function (req, res) {
        companyPosition.findAll().then(function(companyPositions){
        	res.send(companyPositions);
        });
        
    },
    deletePosition: function(req, res) {
        
    }
}