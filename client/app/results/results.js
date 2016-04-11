var app = angular.module('storiesApp.results', []);

app.service('resultsService', function(){
  this.showResults = function(cb){
    cb(JSON.parse(localStorage.getItem('stories')));
  }
});

app.controller('resultsController', function($scope, resultsService){
  $scope.stories = resultsService.showResults(function(stories){
    return stories;
  });
});
