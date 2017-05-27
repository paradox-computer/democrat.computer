angular
  .module('app')
  .controller('hassanCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
    $scope.items = ['hassan','work','mission','news','contact',];
    $scope.selectedValue = 'hassan';

  
  }]);