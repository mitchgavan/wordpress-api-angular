'use strict';
 
angular.module('angularWP')
	.controller('PostCtrl', function($http, $scope, $state, $stateParams) {

		$scope.dataLoaded = false;
	
		$http.get('http://localhost:61685/wp-json/wp/v2/posts/' + $stateParams.id).success(function(response){
			$scope.post = response;
			$scope.dataLoaded = true;
		});
		
    });