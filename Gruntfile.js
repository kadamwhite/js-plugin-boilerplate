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
					// Use the "optimize" property to specify your minifier (or lack
					// thereof): e.g., comment this next line out to disable minification
					optimize: 'none',
					// Call to `include()` takes a baseUrl-relative filename
					// Could also do `name: 'app.js'`
					include: [ 'app' ],
					// Render the assembled application to a file:
					out: 'js/build/app.js',
					// And finally, prepare it for use alongside other WP plugins:
					onBuildWrite: function( name, path, contents ) {
						return require( 'amdclean' ).clean({
							code: contents,
							prefixMode: 'camelCase'//,
							// escodegen: {
							// 	format: {
							// 		indent: { style: '  ' }
							// 	}
							// }
						});
					}
					// onModuleBundleComplete: function( data ) {
					// 	// In order to use Require-managed files alongside files declared with
					// 	// Universal Module Definition (UMD), such as jQuery or Backbone, we
					// 	// use the AMDClean module to remove the traces of Require which would
					// 	// conflict with UMD's handling of the "define" function. Since most
					// 	// of WordPress is *not* an AMD context, this is essential to avoid
					// 	// breaking JavaScript from other plugins!
					// 	//
					// 	// For more details, see the AMDClean documentation:
					// 	// https://github.com/gfranko/amdclean#amdclean-with-the-requirejs-optimizer
					// 	var fs = require( 'fs' );
					// 	var amdclean = require( 'amdclean' );
					// 	var outputFile = data.path;

					// 	console.log(outputFile);

					// 	fs.writeFileSync( outputFile, amdclean.clean({
					// 		filePath: outputFile
					// 	}));
					// }
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
