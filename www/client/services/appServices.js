angular.module('movieManager.services', []).factory('MovieService', function($resource) {
    return $resource('/api/movies/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});