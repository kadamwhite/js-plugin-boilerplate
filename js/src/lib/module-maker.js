// This is not a real third-party module, but should demonstrate how to
// "shim" non-AMD files so that they can still be loaded via Require.
var ModuleMaker = (function() {
	function ModuleMaker( name ) {
		this.name = name;
	}

	/** Returns one of the integers from 1 to 10 */
	ModuleMaker.prototype.random = function() {
		return Math.floor( Math.random() * 10 ) + 1;
	}

	return ModuleMaker;
});
