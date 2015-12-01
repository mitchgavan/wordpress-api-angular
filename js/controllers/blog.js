'use strict';
 
angular.module('angularWP')
	.controller('BlogCtrl', function($http, wordpressApi, $stateParams) {
		var ctrl = this;
		
		ctrl.dataLoaded = false;
		
        wordpressApi.getPosts(function(response) {
			ctrl.posts = response.data;
			ctrl.dataLoaded = true;
		});
	
    });