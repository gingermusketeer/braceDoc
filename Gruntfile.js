/*{
    "description": [
        "The project Gruntfile. Grunt is only really used for",
        "testing and code quality."
    ]
}*/

'use strict';

//--------------------------------EXPORTS--------------------------------------

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        jshint: {
            all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                indent: 4,
                //maxdepth: 4,
                globals: {
                    expect: true,     //--jasmine globals
                    describe: true,
                    it: true,
                    spyOn: true,
                    beforeEach: true  //!--jasmine globals
                }
            }

        },
        jasmine_node: {
            projectRoot: ".",
            requirejs: false
        },
        concat: {
            dist: {
                src: ["lib/docs/**/*.js"],
                dest: "dist/docs!.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('test', 'jasmine_node');

    // Default task.
    grunt.registerTask('default', ['test', 'jshint']);
};
