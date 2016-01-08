var photoControllers = angular.module('photoControllers', []);

photoControllers.controller('MainCtrl', ['$scope', '$http', 'Page', function ($scope, $http, Page){
    $scope.photos = [];
    $scope.dataLoaded = false;
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json";
    $http.jsonp(url, {
        params: {
                "jsoncallback": "JSON_CALLBACK"
            },
            "responseType": "json"
        }).success(function(data) {
            $scope.photos = data.items;
            $scope.dataLoaded = true;
        });

    $scope.Page = Page;
}]);

photoControllers.controller('GalleryController', ['$scope', 'Page', function ($scope, Page){
    var pagesShown = 1;
    var pageSize = 5;
    $scope.photoLimit = function() {
        return pageSize * pagesShown;
    };
    $scope.hasMoreItemsToShow = function() {
        return pagesShown < ($scope.photos.length / pageSize);
    };
    $scope.showMoreItems = function() {
        pagesShown = pagesShown + 1;         
    };

    Page.setTitle('Flickr Public Feed');

}]);


photoControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', 'Page', 
	function ($scope, $routeParams, Page){

	$scope.photo_id = $routeParams.photoID;

    $id = $scope.photo_id;
    console.log($id);
    console.log($scope.photos[$id].title);
    $title = $scope.photos[$id].title;
    Page.setTitle($title);
}]);


