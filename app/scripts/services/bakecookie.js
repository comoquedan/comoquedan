'use strict';

/**
 * @ngdoc service
 * @name cuantoQuedaApp.BakeCookie
 * @description
 * # BakeCookie
 * Factory in the cuantoQuedaApp.
 */
angular.module('cuantoQuedaApp')
  .factory('BakeCookie', function ($cookieStore){
    return {
        set : function(name, data){
            $cookieStore.put(name,data);
        },
        remove: function(name){
            $cookieStore.remove(name);
        },
        get: function(name){
            return $cookieStore.get(name);
        }
    }
  });
