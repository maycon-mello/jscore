
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: ['tests/*.html']
        },
        jsdoc : {
            dist : {
                src: ['src/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    });
    //
    grunt.loadTasks("build/tasks")
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-jsdoc');
    //
    grunt.registerTask('default', ['jsdoc','annotations', 'qunit']);

};
