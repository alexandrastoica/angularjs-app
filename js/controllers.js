var photoControllers = angular.module('photoControllers', []);

photoControllers.controller('GalleryController',['$scope','$http', function ($scope, $http){
		$scope.photos = [];
		var url = "https://api.flickr.com/services/feeds/photos_public.gne";
	    $http.jsonp(url, {
	    	params: {
	                "tags": "potato",
	                "tagmode": "any",
	                "format": "json",
	                "jsoncallback": "JSON_CALLBACK"
	            },
	            "responseType": "json"
	        }).success(function(data) {
	            $scope.photos = data.items;
	        });
}]);


photoControllers.controller('PhotoDetailCtrl', ['$scope', '$http', '$routeParams', 
	function ($scope, $http, $routeParams){
		$scope.photos = [];
			var url = "https://api.flickr.com/services/feeds/photos_public.gne";
		    $http.jsonp(url, {
		    	params: {
		                "tags": "potato",
		                "tagmode": "any",
		                "format": "json",
		                "jsoncallback": "JSON_CALLBACK"
		            },
		            "responseType": "json"
		        }).success(function(data) {
		            $scope.photos = data.items;
		            });

	$scope.photo_id = $routeParams.photoID;
}]);


