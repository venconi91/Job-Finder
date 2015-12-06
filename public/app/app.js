var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/home',
            controller: ''
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when("/signin", {
            templateUrl: 'partials/account/signin',
            controller: 'signinCtrl'
        })
        .when("/profile", {
            templateUrl: "partials/profile/profile.jade",
            controller: "profileCtrl"
        })
        .when("/myPositions", { // only when company
            templateUrl: "partials/position/myPosition.jade",
            controller: "positionCtrl"
        })

    app.run(function($rootScope, $location) {
        $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
            if (rejection === 'not authorized') {
                $location.path('/');
            }
        })
    });
});