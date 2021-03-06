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
            res.status(400).send(err);
        })
    },
    updatePosition: function (req, res) {
        
    },
    getAllPositions: function (req, res) {
        //var userId = 2;
        models.JobPosition
        .findAll({
            include: [{
                model: models.User
            }]
        })
        .then(function(jobPositions){
            //console.log(jobPositions);
        	res.send(jobPositions);
        })
        .catch(function(err){
            //console.log(err);
            res.status(404).send(err);
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
            res.status(404).send(err); // set status code
        })
    },
    getSearchedJobs: function(req, res){ // check if can be in one method with get all positions
        var searchText = req.query.searchText.trim() || "";
        var locationName = req.query.locationName.trim() || "";

        models.JobPosition
        .findAll({
            where: {
                $and: [{
                    location: {
                        $like: "%" + locationName + "%"
                    }
                },{
                    $or: [{
                        title: {
                            $like: "%" + searchText + "%"
                        }
                    }, {
                        description: {
                            $like: "%" + searchText + "%"
                        }
                    }]
                }]
            }
        })
        .then(function(jobPositions){
            res.send(jobPositions);
        });

    }
}