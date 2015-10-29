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

        login.send = function(){
          $http.get('https://rocky-falls-8228.herokuapp.com/api/users/' + '/whoami', {
            headers: {
              Authorization: "Basic" + btoa(login.user.username + ':' + login.user.password)
            }
          }).then(function(response){
            $http.defaults.headers.common.Authorization = "Basic" + btoa(
              login.user.username + ':' + login.user.password
            );
          })//END OF PROMISE
        }//END OF .SEND
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

    .when('/activity-display/:activities_id', {
      templateUrl: 'partials/activity-display.html',
      controller: function($http, $routeParams, $rootScope){
        console.log($routeParams);
        $http.get('https://rocky-falls-8228.herokuapp.com/api/activities/'+ $routeParams.activities_id)

        },

    }) //END OF ACTIVITY DISPLAY

    .when('/activity-homepage', {
      templateUrl: 'partials/activity-homepage.html',
      controller: function($http, $rootScope){
        $http.get('https://rocky-falls-8228.herokuapp.com/api/activities/')
          .then(function(response){
            // $rootScope.full_description = "Hello There"

            $rootScope.activities = response.data;
          })
      }
    })//END OF ACTIVITY HOMEPAGE

  }); // END OF JAL-STATS MODULE


})(); //END OF IFFE
