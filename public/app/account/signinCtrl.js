app.controller('signinCtrl', function($scope, $location, notifier, identity, auth) {
    $scope.identity = identity;

    $scope.signin = function(user) {
        auth.signin(user).then(function(success) {
        	console.log(success);
            if (success) {
                notifier.success('Successful login!');
                console.log("success")
            }
            else {
                notifier.error('Username/Password combination is not valid!');
                console.log("error")
            }
        });
    }

    $scope.logout = function() {
        auth.logout().then(function() {
            notifier.success('Successful logout!');
            if ($scope.user) {
                $scope.user.username = '';
                $scope.user.password = '';
            }
            $location.path('/');
        })
    }
})