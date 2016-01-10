var models = require("../models");

module.exports = {
	createApplying: function (req, res) {
        var positionId = req.body.positionId;
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
        models.Apply.findAll()
        .then(function(applyings){
        	res.send(applyings);
        });
        
    },
    deleteApplying: function(req, res) {
        
    },
    getMyApplyings: function(req, res){
        var userId = req.user.id;

        models.sequelize.query('SELECT jp.title, jp.salary, jp.location, u.username, u.profileImageURL, a.createdAt FROM jobpositions jp join applies a on jp.id = a.JobPositionId join users u on u.id = jp.UserId where a.UserId = ?',
          { replacements: [userId], type: models.sequelize.QueryTypes.SELECT }
        )
        .then(function(applies){
            res.send(applies);
        }).catch(function(err){
            res.status(404).send(err);
        })
    }
}