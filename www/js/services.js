'use strict';

angular.module('angularGoogleMapsExample.services', ['angularGoogleMapsExample.constants'])

  .factory('Yelp', function($http, $q, apiUrl) {
    return {
      search: function(position, term) {
        return $http({
          method: "get",
          url: apiUrl + 'api/v1/yelp/search',
          params: {
            term: term,
            limit: 10,
            radius_filter: 500,
            sort: 1,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      }
    };
  });
