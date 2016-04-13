var app = angular.module('storiesApp.results', []);

app.service('resultsService', function(){
  this.showResults = function(cb){
    var workMe = localStorage.getItem('stories');
    console.log('were in results service', workMe);
    cb(workMe);
  }
});

app.controller('resultsController', function($scope, resultsService){
  $scope.stories = resultsService.showResults(function(stories){
    return stories;
  });
});
