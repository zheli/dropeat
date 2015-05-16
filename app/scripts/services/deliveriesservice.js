'use strict';

/**
 * @ngdoc service
 * @name dropeatApp.deliveriesService
 * @description
 * # deliveriesService
 * Service in the dropeatApp.
 */
angular.module('dropeatApp')
  .service('deliveriesService', function (localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var deliveryHistory = localStorageService.get('deliveries');

    var deliveries = deliveryHistory || [];

	return {
        getProperty: function () {
            return deliveries;
        },
        setProperty: function(a,t) {
            console.log("nu är jag här");
			deliveries.push({
				'address': a,
				'time': t,
			});
        }
    };
  });
