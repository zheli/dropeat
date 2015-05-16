'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:ShopprogressCtrl
 * @description
 * # ShopprogressCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  .controller('ShopprogressCtrl', function ($scope, $http) {
  	$scope.ETA = 10;

  	$scope.max = 200;
    $scope.deliveryStatus;

    $scope.updateProgressBar = function() {
      $scope.stacked = [];
      var statusMessages = ['on the way', 'arrived', 'returning', 'returned'];

      if ($scope.deliveryStatus == statusMessages[0]){
        i=1;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[1]) {
        i=4;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[2]) {
        i=5;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[3]) {
        i=6;
        console.log("id",i);
      }
      var types = ['success', 'info', 'warning', 'warning', 'warning', 'success'];
      var index=i;
      $scope.stacked.push({
        value: i*20,
        type: types[index]
      });
    };
    $scope.updateApi = function() {
      apiService.setProperty();
      setInterval(function() {
        $scope.deliveryStatus = apiService.getProperty();
        $scope.updateProgressBar();
        console.log('hämtad status', $scope.deliveryStatus);
      }, 2 * 1000 /* interval is in milliseconds */ );
    }

  	var i=0;

  	$scope.nextIndex = function() {
  	  $scope.stacked = [];
  	  var types = ['success', 'info', 'warning', 'warning', 'warning', 'success'];
  	  var index=i;
	      $scope.stacked.push({
	        value: i*20,
	        type: types[index]
	      });
	  i=i+1;
  	};

  	$scope.nextIndex();
  	$scope.nextIndex();

  	$scope.getIndex = function () {
  		return i;
  	}

	var text = ['Drone is on the way', 'Waiting for customer to confirm', 'Returning to shop', 'Returned', 'Ready to fly again'];
  $scope.getText = function () {
  		return text[i-2];
  }

  $scope.dropFood = function () {
      $http({method : 'GET',url : 'http://localhost:5000/drop_package'})
      .success(function(data, status) {
          console.log('status', data);
      })
      .error(function(data, status) {
          console.log('fail')
      });
  }

  });


