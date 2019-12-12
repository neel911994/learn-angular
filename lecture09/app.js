(function(){
  'use strict'
  angular.module('DIApp', [])
  .controller('DIController',DIController);

  function DIController($scope, $filter, $injector){

    $scope.name = "neelam";
    $scope. upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }

      console.log($injector.annotate(testFunction));
  }
  function testFunction(name, age, blah){
    return "BLAH!!!"
  }

  console.log(testFunction.toString());


})();
