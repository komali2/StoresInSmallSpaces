var app = angular.module('storiesApp.landing', []);

app.service('landingService', function($http, $location){
  this.submit = function(value, cb){
     $http({
      method: 'POST',
      url: '/home/search',
      data: value
    })
    .then(function success(res){
      if(cb){
        cb(res.data);
      }
    }), function error(res){
      if(cb){
        cb(res);
      }
    };
  };

});

app.controller('landingController', function($scope, $location, landingService){
  $scope.submit = function(){
    landingService.submit($scope.searchbox)
  }
});
