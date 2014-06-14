/**
 * Returns a random integer from 1 through 10
 *
 * @module random
 */
define(function() {
	// Returning a function
	return function() {
		return Math.floor( Math.random() * 10 ) + 1;
	};
});
