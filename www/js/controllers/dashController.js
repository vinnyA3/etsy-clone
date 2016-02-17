angular.module('dashController',[])
  .controller('DashCtrl', function($scope,Products){
      $scope.products = Products.getAllProducts();
  });
