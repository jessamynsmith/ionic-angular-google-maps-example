// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// the 2nd parameter is an array of 'requires'
var app = angular.module('angularGoogleMapsExample', ['ionic', 'ngCordova', 'uiGmapgoogle-maps',
    'angularGoogleMapsExample.controllers'])

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
    })

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        .state('map', {
          url: '/map',
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/map');

    })
  ;
