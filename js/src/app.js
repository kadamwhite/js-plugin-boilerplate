define([ 'require' ], function( require ) {
	var module1 = require('module1'),
		module2 = require('module2');

	console.log( module1.value );
	module2.init();
});
