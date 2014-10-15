'use strict';

/**
 * @ngdoc function
 * @name cuantoQuedaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cuantoQuedaApp
 */
angular.module('cuantoQuedaApp')
  .controller('LoginCtrl', function ($scope,ServiceHandler) {
  	$scope.user = {};
    $scope.addUser = function(){
		ServiceHandler.post('serviceUsuario',{action: "add", idUsuario: $scope.user.id, password: $scope.user.password, tipo : 1}
        ).then(function(response){
            if(response == true){
                console.log('correcto');
            }
            else{
                alert(response);
            }
        });
    	console.log('checked' + $scope.user.id + $scope.user.password);
    };
    $scope.checkUser = function(){
    	ServiceHandler.get('serviceUsuario',{idUsuario: $scope.user.id}
        ).then(function(response){
            if(response == true){	
                console.log('correcto');
            }
            else{
                console.log('incorrecto');
            }
        });
    	console.log('added' + $scope.user.id + $scope.user.password);
    };
  });
