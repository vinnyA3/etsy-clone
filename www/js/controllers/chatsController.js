angular.module('chatsController', [])
  .controller('ChatsCtrl', function($scope, Products) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});


    //dummy var for image
    $scope.image = 'http://static.tumblr.com/1ndm60x/TERm1czxv/813925-sonic21_large.png';
    $scope.submit = function(product){
      console.log('button was clicked', product);
      Products.saveProduct(product,$scope.image);
    };

  });
