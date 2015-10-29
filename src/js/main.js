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
      controller: function($http, $location){
        this.activities = { };

        this.logActivity = function(){
          $http.post('https://rocky-falls-8228.herokuapp.com/api/activities/')

          this.activities = { };
          $location.path('/activity-form');
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
            $rootScope.activities = response.data;
          })
      }
      // secondController: function($http, $rootScope){
      //   var newActivity = { };
      //   newActivity.createActivity = function(){
      //   $http.post('https://rocky-falls-8228.herokuapp.com/api/activities/')
      //   }
      //   // var newActivity = { };
      // }, //END SECOND CONTROLLER
      // controllerAs: 'newActivity'
    })//END OF ACTIVITY HOMEPAGE

  }); // END OF JAL-STATS MODULE


})(); //END OF IFFE
