'use strict';
 
angular.module('angularWP')
	.controller('BlogCategoryCtrl', function($http, BlogService, $stateParams) {
		var ctrl = this;
		
		ctrl.dataLoaded = false;
		
		ctrl.getPosts = function () {
		  BlogService.postsByCategory($stateParams.categorySlug)
			.then(function (result) {
			  ctrl.posts = result;
			  ctrl.dataLoaded = true;
			});
		};
		
		ctrl.getPosts();
    });