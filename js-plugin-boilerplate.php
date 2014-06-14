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

	// Configuration for the plugin's script file
	$path = $plugin_path;
	$dependencies = array();

	// The path of the app entry point will be different if we're in debug or
	// not, and the app will not depend on require if we're in production mode
	if ( WP_DEBUG ) {
		$path .= 'js/require-config.js';
		$dependencies[] = 'require';
	} else {
		$path .= 'js/build/app.js';
	}

	// Register the js-plugin-boilerplate script
	wp_register_script(
		'js-plugin-boilerplate',
		$path,
		$dependencies,
		'0.1.0',
		true
	);

	// Now that the plugin's script is registered, localize it to add the
	// script source directory path to the RequireJS configuration
	if ( WP_DEBUG ) {
		wp_localize_script(
			'js-plugin-boilerplate',
			'REQUIRE_CONFIGURATION',
			array(
				'baseUrl' => $plugin_path . 'js/src'
			)
		);
	}

	// Enqueue the plugin's script
	wp_enqueue_script( 'js-plugin-boilerplate' );
}
add_action( 'wp_enqueue_scripts', 'js_boilerplate_load_scripts' );
