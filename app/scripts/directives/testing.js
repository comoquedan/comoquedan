'use strict';

/**
 * @ngdoc directive
 * @name cuantoQuedaApp.directive:testing
 * @description
 * # testing
 */
angular.module('cuantoQuedaApp')
  .directive('testing', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testing directive');
      }
    };
  });
