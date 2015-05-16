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
  	var i=0;
    $scope.deliveryStatus;

  	$scope.updateProgressBar = function() {
  	  $scope.stacked = [];
      var statusMessages = ['ready to fly', 'on the way', 'arrived', 'returning'];

      if ($scope.deliveryStatus == statusMessages[0]){
        i=1;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[1]) {
        i=2;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[2]) {
        i=3;
        console.log("id",i);
      }
      else if ($scope.deliveryStatus == statusMessages[3]) {
        i=4;
        console.log("id",i);
      }
  	  var types = ['success', 'info', 'warning', 'success'];
	      $scope.stacked.push({
	        value: i*25,
	        type: types[i-1]
	      });
	  //i=i+1;
  	};

    $scope.updateApi = function() {
      apiService.setProperty();
      setInterval(function() {
      $scope.deliveryStatus = apiService.getProperty();
      $scope.updateProgressBar();
      console.log('hämtad status', $scope.deliveryStatus);
      }, 2 * 1000 /* interval is in milliseconds */ );
    }

  	$scope.getIndex = function () {
  		return i;
  	}

	var text = ['Order confirmed', 'Food sent', 'Arrived at address', 'Delivered'];
  	$scope.getText = function () {
  		return text[i-1];
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


