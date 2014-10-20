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
    var domain = 'http://www.comoquedan.com'; //''
    return {
        post : function(type,params,action){
            console.log(params);
            return $http.post(domain+'/api.php/api/'+type+'/user/format/json', {
                action : action || "",
                data : params || ""
            });
        },
        get : function(type,param,action){
            console.log(param);
            return $http.get(domain+'/api.php/api/'+type+'/user/format/json', {
                params: param
            });
        }
    }
  }]);
