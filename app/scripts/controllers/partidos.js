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
        $scope.leagueMatches= [];// End "sales" Array.

        var listPartidos=[];
            
        //[{id:0,id_Equipo1:1,id_Equipo2:2,goles_Equipo1:0,goles_Equipo2:0,fecha:"2014-10-18 20:00:00",id_Liga:1}];
        //alert($scope.leagueMatches[0].matches[0].fecha);
        //console.log($scope.leagueMatches);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        var hh = today.getHours();
        var mn = today.getMinutes();
        var ss = today.getSeconds();
        if(dd<10) {
            dd='0'+dd;
        } 
        if(mm<10) {
            mm='0'+mm;
        } 
        if(hh<10) {
            hh='0'+hh;
        } 
        if(mn<10) {
            mn='0'+mn;
        } 
        if(ss<10) {
            ss='0'+ss;
        } 
        today = yyyy+'-'+mm+'-'+dd+' '+hh+':'+mn+':'+ss;
        //alert(today);

        ServiceHandler.get('serviceLiga'
        ).then(function( responseLiga){
            if( responseLiga){
                console.log('correcto');              
                for(var i = 0; i <  responseLiga.data.length; i++){
                  getPartido("2014-10-14 00:00:00", responseLiga.data[i].id, responseLiga.data[i].Nombre);
                }
            }
            else{
                console.log('incorrecto');
            }
        });

        function getPartido(date,idL,liga){
            ServiceHandler.get('servicePartido'//,{fechaPartido:date,idLiga:idL}
                    ).then(function(  responsePartido){
                        if(  responsePartido){
                             $scope.leagueMatches.push({name:liga,matches:responsePartido.data});
                           
                            console.log($scope.leagueMatches);
                        }
                        else{
                            console.log('incorrecto');
                        }
                    });
        }
  });

        /*ServiceHandler.get('servicePartido',{idPartido:1}
        ).then(function( responseLiga){
            if( responseLiga){
                //console.log('correcto');
                var parsed = JSON.parse( responseLiga);                
                for(var i in parsed){
                  parsed[i].id_Equipo1=getEquipo(parsed[i].id_Equipo1);
                  parsed[i].id_Equipo2=getEquipo(parsed[i].id_Equipo1);

                  $scope.leagueMatches.push(parsed[i]);
                }
            }
            else{
                console.log('incorrecto');
            }
        });*/
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