angular.module('authService', ['firebase'])
  .factory('Auth', function(FURL,$firebaseAuth,$state){
    //create a new firebase instance
      var ref = new Firebase(FURL);
      //firebase auth
      var auth = $firebaseAuth(ref);
      var authFactory = {
          user: {},
          login: login,
          register: register,
          logout: logout
      };
      function login(user){
        console.log('User: ' + user.name + " has logged in!");
        return auth.$authWithPassword({
          email: user.email,
          password: user.password
        });
      };

      function register(user){
        console.log('registering ...');
        return auth.$createUser({
          email: user.email,
          password: user.password
        }).then(function(){
          console.log("user is saving...");
          return authFactory.login(user);
        })
        .catch(function(){
          console.log('error regsitering!');
        })
      }

      function logout(){
        auth.$unauth();
      };

      auth.$onAuth(function(authData){
        if(authData){
          authFactory.user=authData;
          console.log('the user has already logged in');
          $state.go('tab.dash');
        }else{
          $state.go('login');
        }
      });

      return authFactory;
  });
