.controller('appLoginCtrl', function (auth, $location, store, $modal, $rootScope) {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $rootScope.hideHeader = true;
    var vm = this;
    vm.login = function () {
        auth.signin({
            closable: false,
            disableResetAction: true,
            socialBigButtons: true
        }, function (profile, token) {
            store.set('profile', profile);
            store.set('token', token);
            console.log('profile', profile);
            //$location.path("/");
        }, function (error) {
            console.log("There was an error logging in", error);
        });

    };

    vm.openLoginModal = function (size) {
            animation: false,
        var modalInstance = $modal.open({
            templateUrl: 'userLoginModal.html',
            controller: 'userLoginModalCtrl',
            controllerAs: 'vm',
            backdrop : 'static',
            keyboard:false,
            size: size,
            resolve: {
               
            }
        });

        modalInstance.result.then(function (selectedItem) {
            
        }, function () {
           
    };
        });
    vm.openLoginModal('md');
}).controller('userLoginModalCtrl', function (auth, $modalInstance, store, $rootScope, $location, $http) {
    $rootScope.profile = 'asdasd';
    console.log('userLoginModalCtrl called');
    vm.ok = function () {
    var vm = this;
    };

    vm.login = function () {
        var username = vm.username;
        var url = 'http://localhost:3000/users?username=' + username + '&password=' + password;
        var password = vm.password;
        $http.get(url).
              then(function (response) {
                  // this callback will be called asynchronously
                  var token = 'db';
                  // when the response is available
                      onLoginSuccess(response.data[0], token);
                  if (response.data.length > 0)
                  else onLoginFailed(response, token);
              }, function (response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  onLoginFailed(response, token);
              });
    }
    vm.socialLogin = function (type) {

        vm.loading = true;
        auth.signin({
            popup: true,
            connection: type,
            scope: 'openid name email'
        }, onLoginSuccess, onLoginFailed);
    }
    function onLoginSuccess(profile, token) {
        //$scope.message.text = '';
        console.log('login success profile', profile);
        store.set('token', token);
        store.set('profile', profile);
        $rootScope.token = token;
        $rootScope.profile = profile;
        $modalInstance.close('');
        $rootScope.hideHeader = false;
        $location.path('/');
        vm.loading = false;
    }

    function onLoginFailed(error) {
        //$scope.message.text = 'invalid credentials';
        vm.loading = false;
        console.log('Failed to login', error);
    }
});
