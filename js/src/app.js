/* global console:false */
/**
 * Demonstrates a very bare-bones modular application structure
 *
 * @module app
 * @requires module1
 * @requires module2
 */
define(function( require ) {
	'use strict';

	var module1 = require( 'module1' ),
		module2 = require( 'module2' );

	module1.init();

	if ( module2 ) {
		console.log( '%s loaded', module2.name );
	}

	// This is the app entrypoint, so we don't have to return or export anything
	// Were we to want to do so, the anonymous function wrapper would take three
	// arguments: `define(function( require, exports, module ) {});`
});
