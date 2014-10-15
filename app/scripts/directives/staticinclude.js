'use strict';

/* 
 * This Directive allow us to include html pages without the need of a controller 
 * Used in the index.html to include header and footer
 */   

/**
 * @ngdoc directive
 * @name cuantoQuedaApp.directive:staticInclude
 * @description
 * # staticInclude
 */
 
angular.module('cuantoQuedaApp')
  .directive('staticInclude', ['$http','$templateCache','$compile','$timeout',function($http, $templateCache, $compile,timer) {
    return function(scope, element, attrs) {
        timer(function(){
            var templatePath = attrs.staticInclude;
            $http.get(templatePath, { cache: $templateCache }).success(function(response) {
                var contents = element.html(response).contents();
                $compile(contents)(scope);
            });
        },'1500');
    };
}]);
