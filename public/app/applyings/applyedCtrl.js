app.controller('applyedCtrl', function($scope, positionService, applyedService) {
    positionService.getPositions()
    .then(function(positions){
		$scope.allPositions = positions;
	}, function(err){
		//console.log(err);
	})

	$scope.showApplyed = function(jobPositionId){
		applyedService.getApplyed(jobPositionId)
		.then(function(applyes){
			$scope.applyes = applyes;
		}, function(err){
			console.log(err)
		})
	}
});
