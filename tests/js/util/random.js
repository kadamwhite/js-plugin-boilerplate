define([ 'util/random' ], function( random ) {

	test( 'random is a function', function() {
		assert.ok( random.name === 'random' );
	});

	test( 'random produces integers no smaller than 1 and no greater than 10', function() {
		var i, randomVal,
			iterations = 100;
		// This is a really clumsy test since we're testing randomness.
		// I probably should have wrapped Math in a module, so we could
		// mock out the underlying Math.random with a stub.
		for ( i = 0; i < iterations; i++ ) {
			randomVal = random();
			assert.ok( Math.floor( randomVal ) === randomVal, 'value is an integer' );
			assert.ok( randomVal <= 10, 'value is no greater than ten' );
			assert.ok( randomVal >= 1, 'value is no less than one' );
		}
	});
});
