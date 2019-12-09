(function(){
'use strict'
  var x = 20;
  angular.module('myFirstApp',[])
  .controller('myFirstController', function($scope){
    $scope.name = '';
    $scope.displayNumber = 0;
    $scope.newVar = "NEELAM";
    $scope.displayNumeric = function(){
      var total = calculateTotal($scope.name);
      $scope.displayNumber = total;

    }

    function calculateTotal(string){
      var totalValue = 0;
      for(var i=0; i<string.length; i++){
        totalValue += string.charCodeAt(i);
      }
    //  console.log(totalValue);
      return totalValue;
    }
  });

})();
