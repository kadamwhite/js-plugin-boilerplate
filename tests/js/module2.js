define([ 'module2' ], function( module2 ) {

	test( '.name property was set correctly', function() {
		assert.ok( module2.name === 'module2' );
	});
});
