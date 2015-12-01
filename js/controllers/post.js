'use strict';
 
angular.module('angularWP')
	.controller('PostCtrl', function($http, $state, $stateParams, BlogService) {
		var ctrl = this;
		
		ctrl.dataLoaded = false;
		
		ctrl.getPost = function () {
		  BlogService.singlePost($stateParams.id)
			.then(function (result) {
			  ctrl.post = result;
			  ctrl.dataLoaded = true;
			});
		};
		
		ctrl.getPost();
    });