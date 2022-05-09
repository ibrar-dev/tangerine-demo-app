'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');

      $routeProvider.
        when('/js', {
          template: '<js-component></js-component>'
        })
        .otherwise({template : ''});
    }
  ]);
