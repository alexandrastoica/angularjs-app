var app = angular.module('photoApp', ['ngRoute', 'ngSanitize', 'photoControllers', 'ngResource']);

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

app.factory('Page', function(){
  var title = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});

/*app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // test for current route
        if(current.$$route) {
            // Set current page title 
            $rootScope.title = current.$$route.title;
        }
    });
}]);*/