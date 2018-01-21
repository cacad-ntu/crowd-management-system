angular.module('starter.services', [])

.factory('Host', function(){
  // var host = "http://10.27.26.252:3000";
  var host = "http://13.229.182.10:3000";

  return {
    getHost: function(){
      return host;
    }
  }
})
