'use strict';
 
angular.module('angularWP')
	.controller('PostCtrl', function($http, $state, $stateParams, BlogService) {
		var ctrl = this;
		
		ctrl.dataLoaded = false;
		
		ctrl.getPost = function () {
		  BlogService.singlePost($stateParams.slug)
			.then(function (result) {
			  ctrl.post = result[0];
			  ctrl.dataLoaded = true;
			});
		};
		
		ctrl.getPost();
    });