angular.module('movieManager.services', []).factory('Movie', function($resource) {
    return $resource('/api/movies/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});