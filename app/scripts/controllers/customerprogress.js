'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:CustomerprogressCtrl
 * @description
 * # CustomerprogressCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  .controller('CustomerprogressCtrl', function ($scope, $http, apiService) {
  	$scope.ETA = 10;

  	$scope.max = 200;

  	var i=0;

    $scope.deliveryStatus;

  	$scope.updateProgressBar = function() {
  	  $scope.stacked = [];
      var statusMessages = ['ready to fly', 'on the way', 'arrived', 'returning', 'returned'];

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
        i=5;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[4]) {
        i=6;
        console.log("id",i);
      }
  	  var types = ['success', 'info', 'warning', 'warning', 'warning', 'success'];
  	  var index=i;
	      $scope.stacked.push({
	        value: i*20,
	        type: types[index]
	      });
	  //i=i+1;
  	};

    $scope.updateApi = function() {
      console.log('asaaaaa');
      apiService.setProperty();
      setInterval(function() {
      $scope.deliveryStatus = apiService.getProperty();
      $scope.updateProgressBar();
      console.log('hämtad status', $scope.deliveryStatus);
      }, 2 * 1000 /* interval is in milliseconds */ );
    }

    

  	//$scope.updateProgressBar();
  	// $scope.updateProgressBar();

  	$scope.getIndex = function () {
  		return i;
  	}

	var text = ['Order confirmed', 'Waiting for restaurant', 'Food sent', 'Arrived at address', 'Delivered'];
  	$scope.getText = function () {
  		return text[i-2];
  	}

  });


