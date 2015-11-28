app.controller("profileCtrl", function($scope, identity){
	console.log("user picture")
	console.log(identity.currentUser.profileImageURL)
	$scope.userInfo = {
        username: identity.currentUser.username,
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName,
        profileImageURL: identity.currentUser.profileImageURL
    };
})