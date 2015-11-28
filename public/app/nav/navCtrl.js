app.controller('navCtrl', function($scope, $location, identity, auth, notifier) {
    $scope.identity = identity;

    $scope.logout = function() {
        auth.logout().then(function() {
            notifier.success('Successful logout!');
            console.log(identity.currentUser);
            $location.path('/');
        })
    }
})