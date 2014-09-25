define([ 'module1' ], function( module1 ) {

	test( 'log calls ', function( assert ) {
		assert.ok( module1.name === 'module1' );
	});

	test( 'init method is present ', function( assert ) {
		assert.ok( typeof module1.init === 'function' );
	});

	// No need to `return` anything in any of these tests; we're using AMD
	// exclusively for its async resolution in these test files.
});
