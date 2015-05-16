'use strict';

/**
 * @ngdoc function
 * @name dropeatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dropeatApp
 */
angular.module('dropeatApp')
  	.controller('MainCtrl', function ($scope, deliveriesService) {
		$scope.deliveries = deliveriesService.getProperty();

		$scope.predicate = '-age';

		$scope.getDatetime = function() {
		  return (new Date).toLocaleFormat("%A, %B %e, %Y");
		};
  	});
