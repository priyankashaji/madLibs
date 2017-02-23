var app=angular.module('Lab15');
app.controller('output',function($scope,infoFactory){
  $scope.user=infoFactory.getInfo();
});
