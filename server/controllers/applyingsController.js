var sequelize = require("../config/config").getSequelize();
var Apply = require("../models/Apply");

module.exports = {
	createApplying: function (req, res) {
        Applying.create({
			title: 'title test POST',
			description: 'description test POST',
			salary: 4321,
			user: 1
		}).then(function(applying){
			res.send(applying);
		})
    },
    updateApplying: function (req, res) {
        
    },
    getAllApplyings: function (req, res) {
        Applying.findAll().then(function(applyings){
        	res.send(applyings);
        });
        
    },
    deleteApplying: function(req, res) {
        
    }
}