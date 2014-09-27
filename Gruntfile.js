var amdclean = require('amdclean');
var fs = require( 'fs' );

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
					// Instead of the shim configs used in the require-config file, here
					// we include all external (non-AMD or WP-native) dependencies with
					// a paths config that will handle loading those scripts off of the
					// global scope (since they are loaded as separate script tags by WP)
					paths: {
						// This part is the same as require-config...
						jquery: 'shims/jquery',
						// ...but this replaces the shim for ModuleMaker:
						'lib/module-maker': 'shims/module-maker'
					},
					// Use the "optimize" property to specify your minifier (or lack
					// thereof): e.g., comment this next line out to disable minification
					optimize: 'none',
					// Call to `include()` takes a baseUrl-relative filename
					// Could also do `name: 'app.js'`
					include: [ 'app' ],
					// Render the assembled application to a file:
					out: 'js/build/app.js',

					// In order to use Require-managed files alongside files declared with
					// Universal Module Definition (UMD), such as jQuery or Backbone, we
					// use the AMDClean module to remove the traces of Require which would
					// conflict with UMD's handling of the "define" function. This is
					// essential if you want to use your script alongside other native WP
					// functionality, like playlists or plugins with their own scripts!
					//
					// For more details, see the AMDClean documentation:
					// https://github.com/gfranko/amdclean#amdclean-with-the-requirejs-optimizer
					onModuleBundleComplete: function( data ) {
						var outputFile = data.path;

						fs.writeFileSync( outputFile, amdclean.clean({
							// AMDClean's input is the output from the Require.js optimizer
							code: fs.readFileSync(outputFile),

							// transformAMDChecks: false,
							// aggressiveOptimizations: false,
							ignoreModules: [
								'ModuleMaker'
							],

							// Tell AMDClean to write the cleaned file out to the same
							// location that was used by the Require.js optimizer
							filePath: outputFile

							// Give AMDClean its own mapping for the above-defined shims, so
							// that they can be cleaned without any lingering references to
							// the "define" method
							// shimOverrides: {
							// 	'lib/module-maker': 'window.ModuleMaker',
							// 	'window.ModuleMaker': 'ModuleMaker'
							// 	// ModuleMaker: 'window.ModuleMaker'
							// }
						}));
					}
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
