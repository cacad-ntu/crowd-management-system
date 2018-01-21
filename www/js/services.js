angular.module('starter.services', [])

.factory('Locations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var locations = [{
    id: 0,
    name: 'Lee Wee Nam',
    capacity: 1000,
    occupied: 500,
    density: 50,
    image: 'img/locations/lee-wee-nam.png',
    type: 'Libraries',
    hasSeatingPlan: true,
    levels:[{
      name: 'Level 2',
      capacity: 250,
      occupied: 125,
      density: 50,
      seatingPlan: 'img/seating_plans/lee-wee-nam-level-2.png'
    }, {
      name: 'Level 3',
      capacity: 250,
      occupied: 125,
      density: 50,
      seatingPlan: 'img/seating_plans/lee-wee-nam-level-3.png'
    }, {
      name: 'Level 4',
      capacity: 250,
      occupied: 125,
      density: 50,
      seatingPlan: 'img/seating_plans/lee-wee-nam-level-4.png'
    }, {
      name: 'Level 5',
      capacity: 250,
      occupied: 125,
      density: 50,
      seatingPlan: 'img/seating_plans/lee-wee-nam-level-5.png'
    }],
    locationHistory:[0, 2, 1, 4, 3, 6, 5, 8, 7, 10, 9]
  }];

  return {
    all: function() {
      return locations;
    },
    remove: function(location) {
      locations.splice(locations.indexOf(location), 1);
    },
    get: function(locationId) {
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i];
        }
      }
      return null;
    }
  };
});
