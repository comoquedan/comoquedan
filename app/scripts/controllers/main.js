'use strict';

/**
 * @ngdoc function
 * @name cuantoQuedaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cuantoQuedaApp
 */
angular.module('cuantoQuedaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.teams = [
      'Liga Deportiva Alajuelense',
      'AngularJS',
      'Karma'
    ];
  });
