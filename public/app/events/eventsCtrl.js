app.controller('eventsCtrl', function($scope, eventsService) {
	$scope.events = [
	  {
	    title: '1 event My event title', // The title of the event
	    type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,5,1,1), // A javascript date object for when the event starts
	    endsAt: new Date(2015,8,26,15), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  },
	  {
	    title: ' 2 eventMy event title', // The title of the event
	    type: 'important', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,11,11,13), // A javascript date object for when the event starts
	    endsAt: new Date(2015,11,11,15), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  },
	  {
	    title: ' 3 eventMy event title', // The title of the event
	    type: 'inverse', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,11,11,8), // A javascript date object for when the event starts
	    endsAt: new Date(2015,11,11,9), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  },
	  {
	    title: ' 4 eventMy event title', // The title of the event
	    type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,11,11,9), // A javascript date object for when the event starts
	    endsAt: new Date(2015,11,11,10), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  },
	  {
	    title: ' 5 eventMy event title', // The title of the event
	    type: 'success', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,11,11,11), // A javascript date object for when the event starts
	    endsAt: new Date(2015,11,11,12), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  },
	  {
	    title: ' 5 eventMy event title', // The title of the event
	    type: 'special', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
	    startsAt: new Date(2015,11,11,8), // A javascript date object for when the event starts
	    endsAt: new Date(2015,11,11,9), // Optional - a javascript date object for when the event ends
	    editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
	    deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
	    draggable: true, //Allow an event to be dragged and dropped
	    resizable: true, //Allow an event to be resizable
	    incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
	    //recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
	    cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
	  }
	];

	$scope.calendarDay = new Date();
	$scope.calendarView = 'month';

	$scope.newEvent;

	$scope.addNewEvent = function(){
		var dateNow = moment().utc();
		var startsAt = new Date(dateNow.year(), dateNow.date(), dateNow.month(), dateNow.hour(), dateNow.minute())
		$scope.newEvent = {
			title: 'new event',
		    type: 'info',
		    startsAt: startsAt,
		    endsAt: startsAt,
		}
	}

	$scope.saveNewEvent = function(newEvent){
		console.log(newEvent)
		eventsService.createEvent(newEvent)
        .then(function(newEvent){
        	//$scope.allPositions.push(newPosition)
        	console.log(newEvent)
        }, function(err){
        	console.log(err)
        });
	}

	$scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
	
});
