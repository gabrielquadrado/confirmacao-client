angular.module('confirmacaoApp', ['ngMaterial', 'ngRoute'])

.config(function($routeProvider, $locationProvider)
{
   $locationProvider.html5Mode(true);

   $routeProvider

   .when('/', {
      templateUrl: 'src/views/login.html',
      controller: 'loginCtrl',
   })

   .when('/login', {
      templateUrl: 'src/views/login.html',
      controller: 'loginCtrl',
   })

   .otherwise ({ redirectTo: '/' });
});