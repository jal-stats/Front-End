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

    .when('/activity-form', {
      templateUrl: 'partials/activity-form.html',
      controller: function($http){
        var activityCreate = { };

        activityCreate.logActivity = function(){
          $http.post('https://rocky-falls-8228.herokuapp.com/api/activities/')
        }
      },
      controllerAs: 'activityCreate'
    }) //END OF ACTIVITY FORM

    .when('/activity-display', {
      templateUrl: 'partials/activity-display.html'

    }) //END OF ACTIVITY DISPLAY

    .when('/activity-homepage', {
      templateUrl: 'partials/activity-homepage.html',
      controller: function($http){
        $http.get('https://rocky-falls-8228.herokuapp.com/api/activities/')
      }
    })//END OF ACTIVITY HOMEPAGE

  }); // END OF JAL-STATS MODULE


})(); //END OF IFFE
