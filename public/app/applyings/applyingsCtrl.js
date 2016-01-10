app.controller('applyingsCtrl', function($scope, applyingsService) {
	applyingsService.getMyApplyings()
        .then(function(myApplyings){
        	$scope.myApplyings = myApplyings;
        }, function(err){
        	//console.log(err)
        });

    $scope.parseTime = function(time){
		return moment(time).fromNow()
	}
});
