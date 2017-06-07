'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.service',
  'myApp.version',
  'slickCarousel'
]).
config(['$locationProvider', '$routeProvider', '$provide', function($locationProvider, $routeProvider, $provide) {

  // FORMATA CURRENCY COM VIRGULA
  $provide.decorator('$locale', ['$delegate', function ($delegate) {
        $delegate.NUMBER_FORMATS.DECIMAL_SEP = ',';
        return $delegate;
    }]);


  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
