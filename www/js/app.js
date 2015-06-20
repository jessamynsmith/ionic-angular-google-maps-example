// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires'
var app = angular.module('angular-google-maps-example', ['ionic', 'uiGmapgoogle-maps'])

  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //key: 'your api key',
      //libraries: 'weather,geometry,visualization',
      v: '3.17'
    });
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

app.controller('MapCtrl', function($scope, uiGmapGoogleMapApi) {
  console.log("In MapCtrl");
  uiGmapGoogleMapApi.then(function(maps) {
    console.log("Map is ready");
    $scope.map = {
      center: {latitude: 43.7, longitude: -79.4},
      zoom: 10
    };

    $scope.markers = [{
      id: "1",
      location: {
        latitude: 43.71,
        longitude: -79.35
      }
    },{
      id: "2",
      location: {
        latitude: 43.75,
        longitude: -79.39
      }
    },{
      id: "3",
      location: {
        latitude: 43.69,
        longitude: -79.48
      }
    }];
  });
});
