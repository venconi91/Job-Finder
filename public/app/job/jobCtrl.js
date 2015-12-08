app.controller('jobCtrl', function($scope, jobService) {
	
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
});
