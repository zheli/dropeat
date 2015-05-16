'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:DeliverCtrl
 * @description
 * # DeliverCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  .controller('DeliverCtrl', function ($scope, Map) {
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);

                Map.addRestaurantMarker($scope.restaurant.vapiano.lat, $scope.restaurant.vapiano.lon);
                Map.addCircle($scope.restaurant.vapiano.lat, $scope.restaurant.vapiano.lon);

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
    
    Map.init();

    $scope.restaurant = {
      vapiano: {droneRadius: 2714856, lat: 57.70523710000001, lon: 11.96858629999997},
    };
    
    $scope.getRadius = function(num) {
      console.log(Math.sqrt(num) * 100);
      return Math.sqrt(num) * 100;
    };

  });