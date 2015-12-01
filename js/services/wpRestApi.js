'use strict';
  
angular.module('angularWP')
  .service('wordpressApi', function ($http, ENDPOINT_URI) {
    this.getPosts = function(callback) {
      $http.get(ENDPOINT_URI + '/posts/')
        .then(callback)
      }; 
});