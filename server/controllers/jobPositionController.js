var models = require("../models");

module.exports = {
	createPosition: function (req, res) {
        var newPosition = models.JobPosition.build(req.body);
        newPosition.UserId = req.user.id;
        newPosition.save()
        .then(function(position){
            res.send(newPosition);
        })
        .catch(function(err){
            res.send(err);
        })
    },
    updatePosition: function (req, res) {
        
    },
    getAllPositions: function (req, res) {
        models.JobPosition.findAll()           // add filter
        .then(function(jobPositions){
        	res.send(jobPositions);
        });
        
    },
    deletePosition: function(req, res) {
        
    },
    getMyPositions: function(req, res){
        var companyId = req.user.id;
        models.JobPosition.findAll({
            where: {
                UserId: companyId
            }
        })
        .then(function(positions){
            res.send(positions)
        })
        .catch(function(err){
            res.send(err);
        })
    }
}