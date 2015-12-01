'use strict';
  
angular.module('angularWP')
  .service('wordpressApi', function ($http) {
    this.getPosts = function(callback) {
      $http.get(wpRestApiUrl + '/posts/')
        .then(callback)
      }; 
});