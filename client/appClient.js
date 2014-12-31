var appClient = angular.module('movieManager', ['ui.router', 'ngResource', 'movieManager.controllers', 'movieManager.services']);

appClient.config(function($stateProvider) {
    $stateProvider.state('movies', { // state for showing all movies
        url: '/movies',
        templateUrl: '/client/views/partials/movies.html',
        controller: 'MovieListController'
    }).state('viewMovie', { //state for showing single movie
        url: '/movies/:id/view',
        templateUrl: '/client/views/partials/movie-view.html',
        controller: 'MovieViewController'
    }).state('newMovie', { //state for adding a new movie
        url: '/movies/new',
        templateUrl: '/client/views/partials/movie-add.html',
        controller: 'MovieCreateController'
    }).state('editMovie', { //state for updating a movie
        url: '/movies/:id/edit',
        templateUrl: '/client/views/partials/movie-edit.html',
        controller: 'MovieEditController'
    });
}).run(function($state) {
    $state.go('movies'); //make a transition to movies state when app starts
});


