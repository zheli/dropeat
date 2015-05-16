'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  	.controller('MainCtrl', function ($scope) {
		$scope.deliveries =
		    [{adress:'Östra hamngatan 30', time:'16:50', duration:10},
		     {adress:'Avenyn 3', time:'15:30', duration:20},
		    ];

		$scope.predicate = '-age';

		$scope.addDelivery = function () {
			$scope.deliveries.push({
				'adress': $scope.adress,
				'time': $scope.time,
				'duration': $scope.duration
			});

			$scope.adress = '';
			$scope.time = '';
			$scope.duration = '';
		};
  	});
