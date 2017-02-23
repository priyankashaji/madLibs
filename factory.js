var app = angular.module('Lab15');
app.factory('infoFactory',function(){
  var userInfo={};
  return{
  sentInfo:function(userData){
    userInfo=userData;
    },
  getInfo:function() {
    return userInfo;
    }
  }
});
