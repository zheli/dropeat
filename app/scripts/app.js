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
    'ngMap',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/customer', {
        templateUrl: 'views/customer.html',
        controller: 'CustomerCtrl'
      })
      .when('/deliver', {
        templateUrl: 'views/deliver.html',
        controller: 'DeliverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });