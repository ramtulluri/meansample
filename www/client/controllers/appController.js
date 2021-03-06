angular.module('movieManager.controllers', [])
    .controller('MovieListController', function ($scope, $state, $window, MovieService) {
        //alert("in cron");
        $scope.movies = MovieService.query(); //fetch all movies. Issues a GET to /api/movies

    }).controller('MovieViewController', function ($scope, $stateParams, MovieService) {
        $scope.movie = MovieService.get({id: $stateParams.id}); //Get a single movie.Issues a GET to /api/movies/:id
    }).controller('MovieCreateController', function ($scope, $state, $stateParams, MovieService) {

        $scope.movie = new MovieService();  //create new movie instance. Properties will be set via ng-model on UI

        $scope.addMovie = function () { //create a new movie. Issues a POST to /api/movies
            $scope.movie.$save(function () {
                $state.go('movies'); // on success go back to home i.e. movies state.
            });
        };
    }).controller('MovieEditController', function ($scope, $state, $stateParams, MovieService) {

        $scope.updateMovie = function () { //Update the edited movie. Issues a PUT to /api/movies/:id
            $scope.movie.$update(function () {
                $state.go('movies'); // on success go back to home i.e. movies state.
            });
        };

        $scope.deleteMovie = function (movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
            $scope.movie.$delete(function () {
                $state.go('movies'); // on success go back to home i.e. movies state.
            });
        };

        $scope.loadMovie = function () { //Issues a GET request to /api/movies/:id to get a movie to update
            $scope.movie = MovieService.get({id: $stateParams.id});
        };

        $scope.loadMovie(); // Load a movie which can be edited on UI
    });