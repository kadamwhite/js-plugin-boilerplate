/* global console:false */
/**
 * Demonstrates a very bare-bones modular application structure
 *
 * @module app
 * @requires module1
 * @requires module2
 */
define([
	'jquery',
	'module1',
	'module2'
], function( $, module1, module2 ) {
	'use strict';

	module1.init();

	console.log( '%s loaded', module2.name );

	$('.entry-title').text('Demo Loaded!');

	// This is the app entrypoint, so we don't have to return anything!
});
