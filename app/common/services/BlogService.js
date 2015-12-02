'use strict';
  
angular.module('angularWP')
  .service('BlogService', function ($http, ENDPOINT_URI) {
    var service = this;
    
    function extract(result) {
      return result.data;
    }
    
    service.allPosts = function () {
      return $http.get(ENDPOINT_URI + 'posts/').then(extract);
    };
    
    service.singlePost = function (slug) {
      return $http.get(ENDPOINT_URI + 'posts/?filter[name]=' + slug).then(extract);
    };
    
    service.categories = function () {
      return $http.get(ENDPOINT_URI + 'terms/category/?filter[name]').then(extract);
    };
    
    service.postsByCategory = function (category) {
      return $http.get(ENDPOINT_URI + 'posts/?filter[category_name]=' + category).then(extract);
    };
    
});