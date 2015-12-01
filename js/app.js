/**
 * Main module of the application.
 */
 
 var wpRestApiUrl = 'http://localhost:61685/wp-json/wp/v2/';
 
angular
  .module('angularWP', [
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
   // Enable html5 mode
	 //$locationProvider.html5Mode(true);

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    })
    .state('post', {
      url: "/post/:id",
      templateUrl: "views/post.html",
      controller: "PostCtrl"
    });
  });