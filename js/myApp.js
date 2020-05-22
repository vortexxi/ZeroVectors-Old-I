var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        'templateUrl' : 'partials/index.html',
		//'controller' : 'appCtrl'
    })
    .when("/health", {
        'templateUrl' : 'partials/health/index.html',
		//controller : 'healthCtrl'
    })
	.when("/test", {
        'templateUrl' : 'partials/test.html',
		controller : 'testCtrl'
    })
	.otherwise({'redirect' : '/'});
	
});
app.controller('appCtrl', function(){
	});
	app.controller('healthCtrl', function($scope){
		$scope.msg = "health one";
	});
	app.controller('testCtrl', function($scope){
		$scope.msg = "test one";
	});