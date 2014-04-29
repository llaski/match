module.exports = function(grunt) {

    grunt.initConfig({
        concat : {
            dist : {
                src : 'lib/**/*.js',
                dest: 'dist/app.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-concat");
};