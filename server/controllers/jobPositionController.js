var sequelize = require("../config/config").getSequelize();
//var companyPosition = require("../models/CompanyPosition");

var models = require("../models");

// catch possible errors!!!
module.exports = {
	createPosition: function (req, res) {
        var postData = req.body;
        
        models.JobPosition.create({
			title: postData.title,
			content: postData.content,
			salary: postData.salary,
			UserId: 1
		}).then(function(jobPosition){
			res.send(jobPosition);
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