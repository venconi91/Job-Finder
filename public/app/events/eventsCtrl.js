app.controller('eventsCtrl', function($scope, eventsService, notifier, identity) {
	$scope.calendarDay = new Date();
	$scope.calendarView = 'month';
	$scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

	$scope.newEvent;
	$scope.identity = identity;
	$scope.addNewEvent = function(){
		var dateNow = moment().utc();
		var startsAt = new Date(dateNow.year(), dateNow.month(), dateNow.date(), dateNow.hour(), dateNow.minute())
		var endsAt = new Date(dateNow.year(), dateNow.month(), dateNow.date(), dateNow.hour(), dateNow.minute())
		$scope.newEvent = {
			title: 'new event',
		    type: 'info',
		    startsAt: startsAt,
		    endsAt: endsAt,
		}
	}

	$scope.saveNewEvent = function(newEvent){
		console.log(newEvent)
		eventsService.createEvent(newEvent)
        .then(function(newEvent){
        	//$scope.allPositions.push(newPosition)
        	$scope.events.push(newEvent);
        	$scope.newEvent = null;
        	notifier.success("Successfully created event");
        }, function(err){
        	console.log(err)
        });
	}

	
	eventsService.getEvents(newEvent)
        .then(function(events){
        	$scope.events = events;
        }, function(err){
        	//console.log(err)
        });
});
