'use strict';

/**
 * @ngdoc service
 * @name dropeatApp.apiService
 * @description
 * # apiService
 * Service in the dropeatApp.
 */
angular.module('dropeatApp')
  .service('apiService', function (localStorageService, $http, $timeout) {
    
  	var deliveryStatus;

  	return {
		getProperty: function () {
			console.log("returnerar status", status);
			return deliveryStatus;
		},
       	setProperty: function(a,t) {
		    // AngularJS will instantiate a singleton by calling "new" on this function
		    (function tick() {
		                $http.get('http://localhost:5000/status').success(function (data) {
		                    console.log ('stat', data);
		                    deliveryStatus = data;
		                    console.log("deliveryStatus", deliveryStatus);
		                    $timeout(tick, 1000);
		                });
		    })();
		}
	}
});
