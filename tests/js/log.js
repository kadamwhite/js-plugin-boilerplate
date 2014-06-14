define([ 'module1' ], function( module1 ) {

	test( 'log calls ', function() {
		ok( '1' == 1, 'coercion is still a thing' );
	});

  // No need to `return` anything; we're just using AMD for its dependency
  // resolution properties in this case.
});)
