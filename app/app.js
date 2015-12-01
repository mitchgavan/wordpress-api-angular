/**
 * Main module of the application.
 */

'use strict';
 
angular
  .module('angularWP', [
    'ui.router',
    'ngSanitize'
  ])
  .constant('ENDPOINT_URI', 'http://localhost:61685/wp-json/wp/v2/')
  .config(function ($stateProvider, $urlRouterProvider) {
    
    // Enable html5 mode (commented out as this causes issues with IIS)
    //$locationProvider.html5Mode(true);

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");
    
    // Now set up the states
    $stateProvider
      .state('blog', {
        url: "/",
        templateUrl: "app/blog/blog.tpl.html",
        controller: "BlogCtrl",
        controllerAs: "ctrl"
      })
      .state('post', {
        url: "/post/:id",
        templateUrl: "app/blog/post.tpl.html",
        controller: "PostCtrl",
        controllerAs: "ctrl"
      })
      .state('about', {
        url: "/about",
        templateUrl: "app/about/about.tpl.html",
        controller: "AboutCtrl",
        controllerAs: "ctrl"
      });
  });