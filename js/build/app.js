;(function() {
var jquery, lib_module_maker, util_random, module2, app, _module1_;
jquery = window.jQuery;
lib_module_maker = window.ModuleMaker;
/**
 * Returns a random integer from 1 through 10
 *
 * @module random
 */
util_random = function () {
  return Math.floor(Math.random() * 10) + 1;
};
/* global console:false */
/**
 * Depends on a shim'd 3rd-party library and exports a module instance
 *
 * @module module1
 * @requires lib/module-maker
 * @requires util/random
 */
_module1_ = function (AppModule, random) {
  
  // Create our local module instance
  var module1 = new AppModule('module1');
  for (var key in module1.prototype) {
    console.log(key, typeof key, module1[key]);
  }
  // Augment module1 with the `random` function
  // (could also be written `module1.random = require( 'util/random' );` )
  module1.random = random;
  // Export module1 for use elsewhere
  return module1;
}(lib_module_maker, util_random);
/**
 * A simple module that returns an object literal
 *
 * @module module2
 */
module2 = { name: 'module2' };
/* global console:false */
/**
 * Demonstrates a very bare-bones modular application structure
 *
 * @module app
 * @requires module1
 * @requires module2
 */
app = function ($, module1, module2) {
  
  module1.init();
  console.log('%s loaded', module2.name);
  $('.entry-title').text('Demo Loaded!');
}(jquery, _module1_, module2);
}());