/* jshint node:true */
module.exports = function( grunt ) {
	'use strict';

	// Load tasks.
	require( 'matchdep' ).filterDev( 'grunt-contrib-*').forEach( grunt.loadNpmTasks );

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		jshint: {
			options: grunt.file.readJSON( '.jshintrc' ),
			grunt: {
				src: [ 'Gruntfile.js' ]
			},
			tests: {
				src: [
					'tests/**/*.js'
				],
				options: grunt.file.readJSON( 'tests/.jshintrc' )
			},
			core: {
				src: [
					'js/src/**/*.js',
					// This assumes you don't want to lint 3rd-party deps in /lib
					'!js/src/lib/**/*.js'
				]
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: 'js/src',
					// We need to redeclare our shim since the require-config.js file
					// is designed to be localized by WP, not consumed via node tasks.
					shim: {
						'lib/module-maker': {
							exports: 'ModuleMaker'
						}
					},
					// Call to `include()` takes a baseUrl-relative filename
					// Could also do `name: 'app.js'`
					include: [ 'app' ],
					out: 'js/build/app.js'
				}
			}
		},
		qunit: {
			all: [ 'tests/*.html' ]
		},
		watch: {
			test: {
				files: [
					'js/src/**/*.js',
					'!js/src/lib/**/*.js'
				],
				tasks: [ 'jshint', 'qunit' ]
			},
			build: {
				files: [
					'js/src/**/*.js'
				],
				tasks: [ 'jshint', 'requirejs' ]
			}
		}
	});

	grunt.registerTask( 'default', [ 'jshint', 'requirejs' ] );
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );
};
