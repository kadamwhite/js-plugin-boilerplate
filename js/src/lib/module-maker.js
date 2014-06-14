// This is not a real third-party module, but should demonstrate how to
// "shim" non-AMD files so that they can still be loaded via Require.

// This module saves its value to a global ModuleMaker object:
// See require-config.js for how we tell Require to use the global
// ModuleMaker object when this file is requested via AMD

/** An extremely basic constructor */
function ModuleMaker( name ) {
	if ( ! ( this instanceof ModuleMaker ) ) {
		return new ModuleMaker( name );
	}
	this.name = name;
}

/** An extremely simplistic prototype method */
ModuleMaker.prototype.init = function() {
	console.log( 'Initialized module "' + this.name + '"' );

	// Permit chaining, just 'cause
	return this;
};
