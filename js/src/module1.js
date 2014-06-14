/* global console:false */
/**
 * Depends on a shim'd 3rd-party library and exports a module instance
 *
 * @module module1
 * @requires lib/module-maker
 * @requires util/random
 */
define(function( require, exports, module ) {
	'use strict';

	var AppModule = require( 'lib/module-maker' ),
		random = require( 'util/random' ),
		// Create our local module instance
		module1 = new AppModule( 'module1' );

	for ( var key in module1.prototype ) {
		console.log( key, typeof key, module1[ key ] );
	}

	// Augment module1 with the `random` function
	// (could also be written `module1.random = require( 'util/random' );` )
	module1.random = random;

	// Export module1 for use elsewhere
	module.exports = module1;
});
