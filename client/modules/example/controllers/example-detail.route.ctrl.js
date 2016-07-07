(function() {
  angular.module('app.example').controller('ExampleDetailRouteCtrl',
      function($log, $routeParams, exampleService) {

    $log.debug('Initializing ExampleDetailRouteCtrl');

    var self = this;

    var id = $routeParams.id;

    this.example = {};

    var getExample = function() {
      exampleService.getExample(id).then(
        function(example) {
          $log.debug('getExample resolve', example);
          self.example = example;
        },
        function(error) {
          $log.log('getExample reject', error);
          alert(error);
        },
        function(progress) {
          $log.debug('getExample notify', progress);
        });
      };

    getExample();
  });
})();
