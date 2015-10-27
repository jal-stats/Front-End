;(function(){
  angular.module("Jal-Stats", ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      templateUrl: 'login.html'
    })

  });


})(); //END OF IFFE
