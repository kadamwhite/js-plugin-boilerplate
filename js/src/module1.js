/* global console:false */
/**
 * Depends on a shim'd 3rd-party library and exports a module instance
 *
 * @module module1
 * @requires lib/module-maker
 * @requires util/random
 */
define([
	'lib/module-maker',
	'util/random'
], function( AppModule, random ) {
	'use strict';

	// Create our local module instance
	var module1 = new AppModule( 'module1' );

	for ( var key in module1.prototype ) {
		console.log( key, typeof key, module1[ key ] );
	}

	// Augment module1 with the `random` function
	// (could also be written `module1.random = require( 'util/random' );` )
	module1.random = random;

	// Export module1 for use elsewhere
	return module1;
});
