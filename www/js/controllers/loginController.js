angular.module('loginController',['authService'])
  .controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
    $scope.login = function(){
      console.log('cool!');

      $scope.user = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        templateUrl: 'templates/partials/login.html',
        title: 'SignIn',
        scope: $scope,
        buttons: [
          {
            text: '<b>Login</b>',
            type: 'button-energized',
            onTap: function(user) {
                user = $scope.user;
                //log user in and send them to the dashboard
                Auth.login(user)
                  .then(function(){
                      $state.go('tab.dash');
                  })
                  .catch(function(err){
                    console.log('Error! .. ' + err);
                  });
            }
          },
          {
            text: '<b>Register</b>',
            type: 'button-calm',
            onTap: function(user) {
                user = $scope.user;
                Auth.register(user)
                  .then(function(){
                    console.log('user was registered successfully!');
                    $state.go('tab.dash');
                  })
                  .catch(function(err){
                    console.log('error....' + err);
                  });
            }
          }
        ]
      });

     };

  });
