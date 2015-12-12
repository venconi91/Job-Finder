var models = require("../models");

module.exports = {
	createApplying: function (req, res) {
        var positionId = req.body.positionId;
        console.log(positionId);
        models.JobPosition
        .findById(positionId)
        .then(function(jobPosition){
            // if user has applied already db constraing error
            models.Apply.create({
                JobPositionId: jobPosition.dataValues.id,
                UserId: req.user.id
            })
            .then(function(apply){
                res.send(apply);
            })
            .catch(function(err){
                res.status(404).send(err);
            })
        })
        .catch(function(err){
            res.status(404).send(err);
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