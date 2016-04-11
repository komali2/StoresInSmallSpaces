var app = angular.module('storiesApp.landing', []);

app.service('landingService', function($http, $location){
  this.submit = function(value, cb){
    var searchObj = {};
    searchObj.zip = value;
     $http({
      method: 'POST',
      url: '/home/search',
      data: searchObj
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

app.controller('landingController', function($scope, $location, landingService, $window){
  $scope.submit = function(){
    landingService.submit($scope.zipcode, function(data){
      console.log('this is response', data);
      $window.localStorage.setItem('stories', data);
    });
  }
});
