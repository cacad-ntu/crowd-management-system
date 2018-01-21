angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('StudyPlaceCtrl', function($scope, Locations) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.locations = Locations.all();
})

.controller('LocationDetailCtrl', function($scope, $stateParams, Locations) {
  console.log($stateParams)
  $scope.location = Locations.get($stateParams.locationId);
})

.controller('EventCtrl', function($scope) {});
