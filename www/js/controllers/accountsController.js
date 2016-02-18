angular.module('accountsController',['authService'])
  .controller('AccountsCtrl', function($scope,Auth){
    $scope.logout = function(){
      Auth.logout();
    }
  });
