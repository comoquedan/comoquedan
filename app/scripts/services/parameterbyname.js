'use strict';

/**
 * @ngdoc service
 * @name cuantoQuedaApp.ParameterByName
 * @description
 * # ParameterByName
 * Factory in the cuantoQuedaApp.
 */
angular.module('cuantoQuedaApp')
  .factory('ParameterByName', function () {
    return {
        get : function(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                    results = regex.exec(location.search);
                return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }
    }
  });
