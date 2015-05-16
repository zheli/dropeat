'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:CustomerprogressCtrl
 * @description
 * # CustomerprogressCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  .controller('CustomerprogressCtrl', function ($scope) {
  	$scope.ETA = 10;

  	$scope.max = 200;

  	$scope.random = function() {
  	  var value = Math.floor((Math.random() * 100) + 1);
  	  var type;

  	  if (value < 25) {
  	    type = 'success';
  	  } else if (value < 50) {
  	    type = 'info';
  	  } else if (value < 75) {
  	    type = 'warning';
  	  } else {
  	    type = 'danger';
  	  }

  	  $scope.showWarning = (type === 'danger' || type === 'warning');

  	  $scope.dynamic = value;
  	  $scope.type = type;
  	};
  	$scope.random();

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

	var text = ['Order confirmed', 'Waiting for restaurant', 'Food sent', 'Arrived at address', 'Delivered'];
  	$scope.getText = function () {
  		return text[i-2];
  	}

  });


