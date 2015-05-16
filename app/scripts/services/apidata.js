'use strict';

/**
 * @ngdoc service
 * @name dropeatApp.apiData
 * @description
 * # apiData
 * Factory in the dropeatApp.
 */
angular.module('dropeatApp')
  .factory('apiData', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
