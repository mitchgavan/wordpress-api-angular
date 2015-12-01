'use strict';
 
angular.module('angularWP')
	.controller('MainCtrl', function($http, $scope, wordpressApi, $stateParams) {
		$scope.dataLoaded = false;
		
        wordpressApi.getPosts(function(response) {
			$scope.posts = response.data;
			$scope.dataLoaded = true;
		});
	
    });