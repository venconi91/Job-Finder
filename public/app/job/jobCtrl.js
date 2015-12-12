app.controller('jobCtrl', function($scope, jobService, identity, notifier, applyingsService) {
	
	$scope.identity = identity;

	jobService.getJobs().then(function(jobs){
		$scope.jobs  = jobs;
	}, function(err){
		//console.log(err);
	})
	
	$scope.search = function(searchText, locationName){
		
		jobService.searchJobs(searchText, locationName)
		.$promise
        .then(function (jobsData) {
            $scope.jobs = jobsData;
        }, function (error) {
            console.log(error)
        })
	}

	$scope.parseTime = function(time){
		return moment(time).fromNow()
	}

	$scope.apply = function(positionId){
		
		console.log(positionId);
		applyingsService
		.apply(positionId)
		.then(function(res){
			notifier.success('Applying Successfull!');
		}, function(err){
			notifier.error('Something Bad Happened!');
		});
	}
});
