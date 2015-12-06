var models = require("../models");

// catch possible errors!!!
module.exports = {
	createPosition: function (req, res) {

        var newPosition = models.JobPosition.build(req.body);
console.log(newPosition)
        newPosition.save()
        .then(function(position){
            console.log("create positionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn success")
            res.send(newPosition);
        })
        .catch(function(err){

            res.send(err);
        })
  //       models.JobPosition.create({
		// 	title: postData.title,
		// 	content: postData.content,
		// 	salary: postData.salary,
		// 	UserId: 1
		// }).then(function(jobPosition){
		// 	res.send(jobPosition);
		// }).catch(function(err){
  //           res.send(err)
  //       })
    },
    updatePosition: function (req, res) {
        
    },
    getAllPositions: function (req, res) {
        companyPosition.findAll().then(function(companyPositions){
        	res.send(companyPositions);
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