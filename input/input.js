var app=angular.module('Lab15');
app.controller('input',function($scope,infoFactory,$location){
  $scope.grabName= function(user){
    infoFactory.sentInfo(user);
    $location.path('/output');
  };
});
