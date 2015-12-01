'use strict';
  
angular.module('angularWP')
  .service('BlogService', function ($http, ENDPOINT_URI) {
    var service = this;
    
    function extract(result) {
      return result.data;
    }
    
    service.allPosts = function () {
      return $http.get(ENDPOINT_URI + '/posts/').then(extract);
    };
    
});