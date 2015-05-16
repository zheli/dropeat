'use strict';

/**
 * @ngdoc overview
 * @name dropeatApp
 * @description
 * # dropeatApp
 *
 * Main module of the application.
 */
angular
  .module('dropeatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/deliver', {
        templateUrl: 'views/deliver.html',
        controller: 'DeliverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
