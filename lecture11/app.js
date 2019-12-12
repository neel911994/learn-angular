(function(){
  'use strict'
  angular.module('DIApp', [])
  .controller('DIController',DIController);

DIController.$inject('$scope');
  function DIController($scope){

    $scope.name = "neelam";
    $scope.pic = "";
    $scope.buttonClick = function(){
      $scope.pic = "-animal";
    }



  }



})();
