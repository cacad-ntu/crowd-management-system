angular.module('starter.controllers', ['chart.js'])

.controller('HomeCtrl', function($scope, $location, $http, Host) {
  $scope.chooseUni = false;
  $scope.confirmUni = function() {
    $scope.chooseUni = !$scope.chooseUni;
  };

  $scope.uploadHost = Host.getHost() + "/upload";
  $scope.reportEvent = function() {
    $http.post(Host.getHost() + "/upload", params)
  };
})

.controller('StudyPlaceCtrl', function($scope, $http, Host) {
  $scope.host = Host.getHost();
  $scope.static = Host.getHost() + "/static/";

  $scope.$on('$ionicView.enter', function(){
    $http.get(Host.getHost() + "/study-place", {})
      .success(function(data) {
        $scope.locations = data;
      })
      .error(function(data) {
        console.log("INTERNAL ERROR");
      });
  })
})

.controller('LocationDetailCtrl', function($scope, $stateParams, $http, Host) {
  $scope.host = Host.getHost();
  $scope.static = Host.getHost() + "/static/";

  $scope.$on('$ionicView.enter', function(){
    $http.get(Host.getHost() + "/location", {params:{"id":$stateParams.locationId}})
      .success(function(data) {
        $scope.location = data;
      })
      .error(function(data) {
        console.log("INTERNAL ERROR");
      });
  })

  $scope.density = location.historicalDensity;
  $scope.timestamp = location.timestamp;
})

.controller('EventCtrl', function($scope, $http, Host) {
  $scope.host = Host.getHost();
  $scope.static = Host.getHost() + "/static/";

  $scope.$on('$ionicView.enter', function(){
    $http.get(Host.getHost() + "/events", {})
      .success(function(data) {
        $scope.events = data;
      })
      .error(function(data) {
        console.log("INTERNAL ERROR");
      });
  })
});
