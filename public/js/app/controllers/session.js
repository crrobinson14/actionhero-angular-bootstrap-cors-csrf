app.controller('session:create', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
  $scope.formData    = {};
  $scope.processForm = function(){
    $rootScope.actionHelper($scope, $scope.formData, '/api/session', 'POST', function(data){
      if(data.user){ $rootScope.user = data.user; }
      // $location.path('/dashboard');
      window.location.href = '/#/dashboard';
      location.reload(); // <- hack to force the CSRF Token to hydrate
    });
  };
}]);

app.controller('session:destroy', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){  
  $scope.submitForm = function(){
    $scope.processForm.call(this);
  };

  $scope.processForm = function(){
    $rootScope.actionHelper($scope, {}, '/api/session', 'DELETE', function(data){
      delete $rootScope.user;
      $location.path('/');
    });
  };
}]);