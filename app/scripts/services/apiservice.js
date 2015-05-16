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
			return deliveryStatus;
		},
       	setProperty: function(a,t) {
		    // AngularJS will instantiate a singleton by calling "new" on this function
		    (function tick() {
		                $http.get('http://localhost:5000/status').success(function (data) {
		                    deliveryStatus = data;
		                    $timeout(tick, 1000);
		                });
		    })();
		}
	}
});
