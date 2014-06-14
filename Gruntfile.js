/* jshint node:true */
module.exports = function( grunt ) {
	// Load tasks.
	require( 'matchdep' ).filterDev( 'grunt-*').forEach( grunt.loadNpmTasks );

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
					'js/*.js'
				]
			}
		},
		uglify: {
			js: {
				options: {
					sourceMap: true
				},
				files: {
					'build/js/wp-api.min.js': [
						'js/app.js',
						'js/utils.js',
						'js/models.js',
						'js/views.js',
						'js/collections.js'
					]
				}
			}
		},
		qunit: {
			all: [ 'tests/*.html' ]
		},
		watch: {
			files: [
				'js/*.js'
			],
			tasks: [ 'jshint', 'qunit' ]
		}
	});

	grunt.registerTask( 'default', [ 'jshint', 'requirejs' ] );
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );
};
