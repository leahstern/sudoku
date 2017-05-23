module.exports = function(grunt){
  grunt.initConfig({
    jshint: {
      files: ["*.js", "tools/*.js", "test/*.js"],
      options: {
        esnext: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", ["jshint"]);
};
