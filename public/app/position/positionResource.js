app.factory('PositionResource', function($resource) {
    var positionResource = $resource('/api/myJobOffers/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return positionResource;
})