/* global requirejs:false */
// Prevent automatic test execution
QUnit.config.autostart = false;

var testBaseDir = '../../tests/js/';

// Configure Require to look for modules in our main /js/src directory
window.REQUIRE_CONFIGURATION = {
  baseUrl: '../js/src'
};

define('app', {});

requirejs(['../js/require-config'], function() {
	// Require the test files, so that we can know when they've loaded
	// (and therefore when we're ready to run QUnit)
	requirejs([
		// Prepending all test paths with '../../tests/js' tells Require to
		// load *these* modules from the tests directory, not from the
		// /js/src directory specified in baseUrl above. This lets us take
		// advantage of /js/src-relative modules within our test files,
		// without impacting our ability to load the test files via AMD.
		testBaseDir + 'module1',
		testBaseDir + 'module2',
		testBaseDir + 'util/random'
	], function(/* the test modules don't export anything */) {
		QUnit.start();
	});
});
