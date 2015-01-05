angular.module('movieManager.services', []).factory('MovieService', function($resource) {
    return $resource('http://54.169.124.136:8200/api/movies/:id', { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
});