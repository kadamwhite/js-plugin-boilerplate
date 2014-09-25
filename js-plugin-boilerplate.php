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
			$plugin_path . 'js/require-config.js',
			array( 'require' ),
			'0.1.0',
			true
		);

		// Now that the plugin's script is registered, localize it to add the
		// script source directory path to the RequireJS configuration
		wp_localize_script(
			'js-plugin-boilerplate',
			'REQUIRE_CONFIGURATION',
			array(
				'baseUrl' => $plugin_path . 'js/src'
			)
		);

	} else {

		// If we're not in script debug mode, load the built version of the plugin
		// directly (without going through Require)
		wp_register_script(
			'js-plugin-boilerplate',
			$plugin_path . 'js/build/app.js',
			array(),
			'0.1.0',
			true
		);

	}

	// Enqueue the plugin's script
	wp_enqueue_script( 'js-plugin-boilerplate' );
}
add_action( 'wp_enqueue_scripts', 'js_boilerplate_load_scripts' );
