define([ 'module1' ], function( module1 ) {

	test( 'log calls ', function() {
		assert.ok( module1.name === 'module1' );
	});

	// No need to `return` anything; we're just using AMD for its dependency
	// resolution properties in these test files.
});
