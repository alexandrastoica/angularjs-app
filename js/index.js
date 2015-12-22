var app = angular.module('photoApp', ['ngRoute', 'ngSanitize', 'infinite-scroll', 'photoControllers']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/feed.html',
        controller: 'GalleryController'
      }).
      when('/photos/:photoID', {
        templateUrl: 'partials/photo-details.html',
        controller: 'PhotoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
