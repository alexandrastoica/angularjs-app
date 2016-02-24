var app = angular.module('photoApp', ['ngRoute', 'ngSanitize', 'photoControllers', 'ngResource']);

app.factory('Photo', function($resource){
    return $resource('https://api.flickr.com/services/feeds/photos_public.gne', {
      format: 'json', jsoncallback: 'JSON_CALLBACK' }, {
      load: {method: 'jsonp'}}
      );
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Flickr Public Feed',
        templateUrl: 'partials/feed.html',
        controller: 'GalleryController'
      }).
      when('/photos/:photoID', {
        title: 'Photo | Flickr Public Feed',
        templateUrl: 'partials/photo-details.html',
        controller: 'PhotoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

app.filter('htmlToPlaintext', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});

app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // test for current route
        if(current.$$route) {
            // Set current page title 
            $rootScope.title = current.$$route.title;
        }
    });
}]);