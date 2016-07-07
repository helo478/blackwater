(function() {
  angular.module('app.example').service('exampleService', function($log, $http, $q) {
    $log.debug('Initializing exampleService');

    var self = this;

    this.examples = [];

    this.getExample = function(id) {
      $log.debug('Entering exampleService.getExample');

      var defer = $q.defer();

      $http.get('/examples/' + id).then(
        function(response) {
          $log.debug('getExample resolve', response);
          defer.resolve(response.data[0]);
        },
        function(error, status) {
          $log.log('getExample reject', error, status);
          defer.reject('Unable to load example ' + id);
        },
        function(progress) {
          $log.debug('getExample notify', progress);
          defer.notify(progress);
        });

      return defer.promise;
    };

    this.getExamples = function() {
      $log.debug('Entering exampleService.getExamples');

      var defer = $q.defer();

      $http.get('/examples').then(
          function(response) {
            $log.debug('getExamples resolve', response);
            self.examples = response.data;
            defer.resolve(response);
          },
          function(error, status) {
            $log.$log('getExamples reject', error, status);
            defer.reject(error, status);
          },
          function(progress) {
            $log.debug('getExamples notify', progress);
            defer.notify(progress);
          });

      return defer.promise;
    };

    this.postExample = function(example) {
      $log.debug('Entering exampleService.postExample', example);

      var defer = $q.defer();

      $http.post('/examples', example).then(
          function(response) {
            $log.debug('postExample resolve: ', response);
            defer.resolve(response);
            self.getExamples();
          }, function(error, status) {
            $log.log('postExample reject', error, status);
            defer.reject(error, status);
          }, function(progress) {
            $log.debug('postExample notify', progress);
            defer.notify(progress);
          });

      return defer.promise;
    };

    this.getExamples();
  });
})();
