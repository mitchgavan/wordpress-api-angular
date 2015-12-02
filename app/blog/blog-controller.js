'use strict';
 
angular.module('angularWP')
	.controller('BlogCtrl', function($http, BlogService, $stateParams) {
		var ctrl = this;
		
		ctrl.postsLoaded = false;
		ctrl.categoriesLoaded = false;
		
		ctrl.getPosts = function () {
		  BlogService.allPosts()
			.then(function (result) {
			  ctrl.posts = result;
			  ctrl.postsLoaded = true;
			});
		};
		
		ctrl.getCategories = function () {
		  BlogService.categories()
			.then(function (result) {
			  ctrl.categories = result;
			  ctrl.categoriesLoaded = true;
			});
		};
		
		ctrl.getPosts();
		ctrl.getCategories();
    });