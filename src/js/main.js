;(function(){
  angular.module("Jal-Stats", ['ngRoute'], function($routeProvider){
    $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: function($http){
        var login = { };

        login.logUser = function(){
          $http.get('https://rocky-falls-8228.herokuapp.com/api/users/')
        }
      },
      controllerAs: 'login'
    }) //END OF LOGIN

    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: function($http){
        var signup = { };

        signup.createUser = function(){
          $http.post('https://rocky-falls-8228.herokuapp.com/api/users/')
        }
      },
      controllerAs: 'signup'
    }) //END OF SIGNUP

  });


})(); //END OF IFFE
