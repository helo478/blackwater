module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['public'],
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
    },
    concat: {
      options: {
        separator: ';'
      },
      jslib: {
        src: [
          'node_modules/angular/angular.min.js',
          'node_modules/angular-route/angular-route.min.js',
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ],
        dest: 'public/lib.js'
      },
      csslib: {
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
        dest: 'public/lib.css'
      }
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

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s). Copy code to the public folder and update as necessary.
  grunt.registerTask('default', ['clean', 'copy', 'concat', 'watch']);
};
