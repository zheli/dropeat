'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:DeliverCtrl
 * @description
 * # DeliverCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  .controller('DeliverCtrl', function ($scope, $location, Map, deliveriesService) {
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
    $scope.send = function() {
        alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);    
    }

    $scope.getDatetime = function() {
    	var time = new Date;
    	var hh = time.getHours();
		var mm = time.getMinutes();
		return hh + ":" + mm;
	};



	$scope.formSubmit = function (address) {
		$location.path('/shopprogress');
		$scope.addDelivery(address);
	}

    $scope.addDelivery = function(a) {
    	deliveriesService.setProperty(a, $scope.getDatetime());
    }


    $scope.restaurant = {
      vapiano: {name: "Vapiano", droneRadius: 2714856, lat: 57.70523710000001, lon: 11.96858629999997},
    };
    
    Map.init();
    Map.addRestaurantMarker($scope.restaurant.vapiano.lat, $scope.restaurant.vapiano.lon);
    Map.addCircle($scope.restaurant.vapiano.lat, $scope.restaurant.vapiano.lon);
    Map.initInfoWindow($scope.restaurant.vapiano.lat, $scope.restaurant.vapiano.lon);
    
    $scope.getRadius = function(num) {
      console.log(Math.sqrt(num) * 100);
      return Math.sqrt(num) * 100;
    };

  });