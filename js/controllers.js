var photoControllers = angular.module('photoControllers', []);

photoControllers.controller('MainCtrl', function($scope, Photo) {

    Photo.load({ tags: 'world' }, function(data) {
        $scope.photos = data.items;

        var pagesShown = 1;
        var pageSize = 5;

        $scope.photoLimit = function() {
            return pageSize * pagesShown;
        }
        $scope.hasMoreItemsToShow = function() {
            return pagesShown < ($scope.photos.length / pageSize);
        }
        $scope.showMoreItems = function() {
            pagesShown = pagesShown + 1;
        }

    });

    $scope.getData = function(tag) {
        $scope.photos = [];

        Photo.load({ tags: tag }, function(data) {
            $scope.photos = data.items;
            console.log($scope.photos);
        });
    }

});

photoControllers.controller('GalleryController', function($scope, Photo) {



});


photoControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.photo_id = $routeParams.photoID;

}]);