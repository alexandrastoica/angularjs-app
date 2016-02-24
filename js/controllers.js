var photoControllers = angular.module('photoControllers', []);

photoControllers.controller('MainCtrl', function ($scope, Photo){
    $scope.dataLoaded = false;
    $scope.getData = function(tag){
        Photo.load({tags: tag}, function(data){
            $scope.photos = data.items;
            console.log($scope.photos);
            $scope.dataLoaded = true;
        });
    }
});

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


