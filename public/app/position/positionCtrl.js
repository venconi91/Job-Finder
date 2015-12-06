app.controller('positionCtrl', function($scope, positionService) {

	$scope.position = {
		title: "new title",
		description: "new description",
		salary: 12343,
		location: "kwartalo"
	}
	$scope.allPositions = []

	positionService.getPositions().then(function(positions){
		console.log(positions);
		$scope.allPositions = positions;
	}, function(err){
		console.log(err);	// handle possible error .catch(function(err){}) ???
	})

    $scope.createPosition = function(position) {
        positionService.postPosition(position)
        .then(function(newPosition){
        	$scope.allPositions.push(newPosition)
        });
    }
});
