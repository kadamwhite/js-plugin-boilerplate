// Prevent automatic test execution
QUnit.config.autostart = false;

// Configure Require to look for modules in our main /js/src directory
requirejs.config({
	baseUrl: '../js/src'
});

var testBaseDir = '../../tests/js/';

// Require the test files, so that we can know when they've loaded
// (and therefore when we're ready to run QUnit)
requirejs([
	// Prepending all test paths with '../../tests/js' tells Require to
	// load *these* modules from the tests directory, not from the
	// /js/src directory specified in baseUrl above. This lets us take
	// advantage of /js/src-relative modules within our test files,
	// without impacting our ability to load the test files via AMD.
	testBaseDir + 'identity',
	testBaseDir + 'other-module'
], function(/* the test modules don't export anything */) {
	QUnit.init();
});
