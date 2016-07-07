(function() {
  angular.module('app.example', ['ngRoute']).config(function($routeProvider) {
    $routeProvider.when('/examples', {
      templateUrl: '/modules/example/views/example.route.html',
      controller: 'ExampleRouteCtrl',
      controllerAs: 'exampleRouteCtrl'
    }).when('/examples/:id', {
      templateUrl: '/modules/example/views/example-detail.route.html',
      controller: 'ExampleDetailRouteCtrl',
      controllerAs: 'exampleDetailRouteCtrl'
    });
  });
})();
