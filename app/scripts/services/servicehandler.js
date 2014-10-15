'use strict';

/**
 * @ngdoc service
 * @name cuantoQuedaApp.ServiceHandler
 * @description
 * # ServiceHandler
 * Factory in the cuantoQuedaApp.
 */
angular.module('cuantoQuedaApp')
  .factory('ServiceHandler', ['$http',function($http){
    return {
        post : function(type,params,action){
            return $http.post('/api.php/api/'+type+'/format/json', {
                action : action || "",
                data : params || ""
            });
        },
        get : function(type,param,action){
            return $http.get('/api.php/api/'+type+'/format/json', {
                params: param
            });
        }
    }
  }]);
