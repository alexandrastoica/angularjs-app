var photoControllers = angular.module('photoControllers', []);

photoControllers.controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
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

}]);

photoControllers.controller('GalleryController', ['$scope', function ($scope){

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
    
}]);


photoControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', function ($scope, $routeParams){
	
    $scope.photo_id = $routeParams.photoID;

}]);


