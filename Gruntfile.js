module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8001,
          hostname: '*',
          livereload: true,
          base: {
            path: 'dist',
            options: {
              index: 'api.html'
            }
          }
        }
      }
    },
    watch: {
      theme: {
        files: ['themes/**/*.nunjucks'],
        tasks: ['raml2html'],
        options: {
          livereload: true
        }
      }
    },
    raml2html: {
      all: {
        options: {
          mainTemplate: 'layout.nunjucks',
          templatesPath: './themes/default'
        },
        files: {
          'dist/api.html': ['../examples/github.raml'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-raml2html');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['raml2html']);
  grunt.registerTask('dev', ['raml2html', 'connect', 'watch']);

};
