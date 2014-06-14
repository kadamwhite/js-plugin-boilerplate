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
	// Register Require.js itself
	wp_register_script(
		'require',
		plugin_dir_url( __FILE__ ) . 'js/require.js',
		array(),
		'2.1.14',
		true
	);

	// The path of the app entry point will be different if we're in debug or not
	$path = plugin_dir_url( __FILE__ );
	$path += WP_DEBUG ? 'js/require-config.js' : 'js/build/app.js';

	// The app will not depend on require if we're in production mode
	$dependencies = WP_DEBUG ? array( 'require' ) : array();

	// Register the js-plugin-boilerplate script
	wp_register_script(
		'js-plugin-boilerplate',
		$path,
		$dependencies
		'0.1.0',
		true
	);

	// Enqueue the plugin's script
	wp_enqueue_script( 'js-plugin-boilerplate' );
}
add_action( 'wp_enqueue_scripts', 'js_boilerplate_load_scripts' );
