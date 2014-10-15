'use strict';

/**
 * @ngdoc overview
 * @name cuantoQuedaApp
 * @description
 * # cuantoQuedaApp
 *
 * Main module of the application.
 */
angular
  .module('cuantoQuedaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partidos.html',
        controller: 'PartidosCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
