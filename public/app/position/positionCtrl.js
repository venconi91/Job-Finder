app.controller('positionCtrl', function($scope, positionService) {

	$scope.allPositions = []

	positionService.getPositions().then(function(positions){
		$scope.allPositions = positions;
	}, function(err){
		//console.log(err);
	})

    $scope.createPosition = function(position) {
        positionService.postPosition(position)
        .then(function(newPosition){
        	$scope.allPositions.push(newPosition)
        });
    }
});
