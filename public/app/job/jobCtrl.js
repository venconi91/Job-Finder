app.controller('jobCtrl', function($scope, jobService) {
	
	jobService.getJobs().then(function(jobs){
		$scope.jobs  = jobs;
	}, function(err){
		//console.log(err);
	})
	
	$scope.search = function(searchText){
		console.log(searchText);
		//jobService.searchJobs(searchText)
	}
});
