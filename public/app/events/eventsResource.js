app.factory('EventsResource', function($resource) {
    var eventsResource = $resource('/api/events/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return eventsResource;
})