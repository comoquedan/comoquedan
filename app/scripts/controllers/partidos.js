'use strict';

/**
 * @ngdoc function
 * @name cuantoQuedaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cuantoQuedaApp
 */
angular.module('cuantoQuedaApp')
  .controller('PartidosCtrl', function ($scope,ServiceHandler) {
    	ServiceHandler.get('servicePartido',{idPartido:1}
        ).then(function(response){
            if(response == true){
                console.log('correcto');
            }
            else{
                console.log('incorrecto');
            }
        });
  });
