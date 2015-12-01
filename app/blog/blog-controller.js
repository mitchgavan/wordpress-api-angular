'use strict';
 
angular.module('angularWP')
	.controller('BlogCtrl', function($http, BlogService, $stateParams) {
		var ctrl = this;
		
		ctrl.dataLoaded = false;
		
		ctrl.getPosts = function () {
		  BlogService.allPosts()
			.then(function (result) {
			  ctrl.posts = result;
			  ctrl.dataLoaded = true;
			});
		};
		
		ctrl.getPosts();
    });