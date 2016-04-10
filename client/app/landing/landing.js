var app = angular.module('storiesApp.landing', []);

app.service('landingService', function($http, $location){
  this.submit = function(value){
    return $http({
      method: 'POST',
      url: '/home/search',
      data: value
    })
    .then(function success(res){
      return res.data;
    }), function error(res){
      return res;
    };
  };

});

app.controller('landingController', function($scope, $location){
  $scope.submit = function(){
    landingService.submit($scope.searchbox)
    .then(function(resData){
      console.log('Success in landingController', resData);
    }).catch(function (res){
      console.log("We had an error in landingController", res);
    });
  }
});
