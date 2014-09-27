<?php
/**
 * JS Plugin Boilerplate.
 *
 * A simple example of how to structure and load AMD-modularized JavaScript
 * within WordPress
 *
 * @package   JS Plugin Boilerplate
 * @author    K.Adam White
 * @license   GPL-2.0+
 * @link      https://github.com/kadamwhite/js-plugin-boilerplate
 * @copyright 2014 K.Adam White
 *
 * @wordpress-plugin
 * Plugin Name:       JS Plugin Boilerplate
 * GitHub Plugin URI: https://github.com/kadamwhite/js-plugin-boilerplate
 * WordPress-Plugin-Boilerplate: v2.6.1
 */

function js_boilerplate_load_scripts() {
	$plugin_path = plugin_dir_url( __FILE__ );

	// Register Require.js itself
	wp_register_script(
		'require',
		$plugin_path . 'js/require.js',
		array(),
		'2.1.14',
		true
	);

	if ( SCRIPT_DEBUG ) {

		// Register the js-plugin-boilerplate script
		wp_register_script(
			'js-plugin-boilerplate',
			// The entry-point for the script in debug mode is the require config
			$plugin_path . 'js/require-config.js',
			array(
				// Our app uses jQuery, but we load it the usual way to avoid
				// conflicting with other plugins on the page.
				'jquery',
				// Include Require itself to asynchronously load the module scripts:
				'require'
			),
			'0.1.0',
			true
		);

		// Now that the plugin's script is registered, localize it to add the
		// script source directory path to the RequireJS configuration, so that
		// Require can find the constituent modules by relative paths
		wp_localize_script(
			'js-plugin-boilerplate',
			'REQUIRE_CONFIGURATION',
			array(
				'baseUrl' => $plugin_path . 'js/src'
			)
		);

	} else {

		// Since we're going to be distributing the built file, include our non-
		// AMD dependency directly (instead of using a shim). This is particularly
		// relevant for common dependencies like jQuery, where you wouldn't want to
		// include the library in your built script anyway.
		wp_register_script(
			'module-maker',
			$plugin_path . 'js/src/lib/module-maker.js',
			array(),
			'0.1.0',
			true
		);

		wp_register_script(
			'js-plugin-boilerplate',
			// When not in script debug mode, load the compiled version of the plugin
			$plugin_path . 'js/build/app.js',
			array(
				// We're serving the built & cleaned version of our app here. We still
				// enqueue jQuery as usual:
				'jquery',
				// We also include any other non-AMD files that don't ship with WP: we
				// shim these when loading through Require, but since they don't
				// get processed reliably processed by the AMDClean library it is safer
				// to load them as traditional script dependencies than to build them
				// into the compiled application script.
				'module-maker'
				// Note that we *omit* the inclusion of Require itself: it isn't needed
				// since we've removed the Require dependency with AMDClean in our
				// build process.
			),
			'0.1.0',
			true
		);

	}

	// Enqueue the plugin's script: in debug mode, this will include both Require
	// and the Require configuration. When SCRIPT_DEBUG is off, it will include
	// the shimmed dependency library directly, as well as a compiled file that
	// contains all of your AMD modules.
	wp_enqueue_script( 'js-plugin-boilerplate' );
}
add_action( 'wp_enqueue_scripts', 'js_boilerplate_load_scripts' );
