module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: { // Task that copies the client application code to the public folder
      app: {
        files: [
          {
            expand: true,
            cwd: 'client',
            src: '**/*',
            dest: 'public'
          }
        ]
      },
      lib: { // Task that copies select library code to the public folder
        files: [
          {
            expand: true,
            cwd: 'node_modules/',
            /*
             * here, specify all the libraries in node_modules to be included
             */
            src: [
              'angular/angular.min.js',
              'angular-route/angular-route.min.js',
              'jquery/dist/jquery.min.js',
              'bootstrap/dist/js/bootstrap.min.js',
              'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS
            ],
            dest: 'public/lib'
          }
        ],
      },
    },
    watch: { // Task that updates client application code in the public folder in real time
      all: {
        files: ['client/**/*'],
        tasks: ['copy'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s). Copy code to the public folder and update as necessary.
  grunt.registerTask('default', ['copy', 'watch']);
};
