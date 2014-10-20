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
        $scope.matches=[{id:0,id_Equipo1:1,id_Equipo2:2,goles_Equipo1:0,goles_Equipo2:0,fecha:"2014-10-18 20:00:00",id_Liga:1}];
         
        ServiceHandler.get('servicePartido',{idPartido:1}
        ).then(function(response){
            if(response == true){
                //console.log('correcto');
                var parsed = JSON.parse(response);                
                for(var i in parsed){
                  parsed[i].id_Equipo1=getEquipo(parsed[i].id_Equipo1);
                  parsed[i].id_Equipo2=getEquipo(parsed[i].id_Equipo1);
 
                  $scope.matches.push(parsed[i]);
                }
            }
            else{
                console.log('incorrecto');
            }
        });
 
        function getEquipo(idE){
            ServiceHandler.get('serviceEquipo',{idEquipo:idE}
                    ).then(function(responseEquipo){
                        if(responseEquipo == true){
                            //console.log('correcto');
                            var parsedEquipo = JSON.parse(responseEquipo);  
                            return parsedEquipo[0].nombre;
                        }
                        else{
                            return "";
                        }
                    });
        }
  });
/*
$user['id'] = $row->int_Id_Partido; // call attributes ID
               $user['id_Equipo1'] = $row->int_Id_Equipo1; // call attributes Id_Equipo1
               $user['id_Equipo2'] = $row->int_Id_Equipo2; // call attributes Id_Equipo2
               $user['goles_Equipo1'] = $row->int_Goles_Equipo1; // call attributes goles_Equipo1
               $user['goles_Equipo2'] = $row->int_Goles_Equipo2; // call attributes goles_Equipo2
               $user['fecha'] = $row->datetime_Fecha; // call attributes fecha
               $user['id_Liga'] = $row->int_Id_Liga; // call attributes id Liga
               array_push($users,$user);
*/