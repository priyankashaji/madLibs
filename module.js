var app=angular.module('Lab15',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/input',{
    controller:'input',
    templateUrl:'input/input.html'
  })
  .when('/output',{
    controller:'output',
    templateUrl:'output/output.html'
  })
  .otherwise({redirectTo:'/'});
  $locationProvider.hashPrefix('');
});
