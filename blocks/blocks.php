<?php


/**
 * Add Theme Block Category
 */
function cdhq_add_block_category( $categories, $post ) {
	return array_merge(
		array(
			array(
				'slug' => 'cdhq',
				'title' => __('Mothers Milk Bank Blocks', 'mmb'),
			)
		),
		$categories
	);
}
add_filter( 'block_categories_all', 'cdhq_add_block_category', 10, 2);


/**
 * Register all custom blocks for theme
 * Hooked into 'init'
 */

function cdhq_register_blocks() {
	$blocks = get_blocks();

	$ver = wp_get_theme()->get('Version');
	$env = wp_get_environment_type();
	$base = get_template_directory() . '/blocks/';
  
	$is_dev = $env == 'development' || $env == 'local';

	// wp_register_script('luxon', 'https://cdn.jsdelivr.net/npm/luxon@3.4.3/build/global/luxon.min.js', array(), null, true);
	// wp_register_style('tabulator-style', 'https://unpkg.com/tabulator-tables/dist/css/tabulator_materialize.min.css');

	if ($is_dev) {
		wp_register_style( 'swiper-styles', get_template_directory_uri() . '/dist/swiper-bundle.css', array(), $ver );
	} else {
		wp_register_style( 'swiper-styles', get_template_directory_uri() . '/dist/swiper-bundle.min.css', array(), $ver );
	}

	wp_register_script('mapbox-gl-search-script', 'https://api.mapbox.com/search-js/v1.0.0-beta.20/web.js', array(), false, true);
	wp_register_script('mapbox-gl-directions-script', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.3.1/mapbox-gl-directions.js', array(), false, true);
	wp_register_script('mapbox-gl-script', 'https://api.tiles.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js', array('mapbox-gl-search-script', 'mapbox-gl-directions-script'), '3.3', true);
	wp_register_style('mapbox-gl-directions-style', 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.3.1/mapbox-gl-directions.css');
	wp_register_style('mapbox-gl-style', 'https://api.tiles.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css', array('mapbox-gl-directions-style'), '3.3');

	foreach ($blocks as $block) {
		$block_base = $base . $block;
		
		$dist_base = get_template_directory_uri() . '/dist/' . $block . '/' . $block;
		
		if (file_exists($block_base . '/block.json')) {
			$block_json = json_decode(file_get_contents($block_base . '/block.json'));
			$dependencies = property_exists($block_json, 'dependencies') ? $block_json->dependencies : false;
			
			register_block_type($block_base);
			
			if (file_exists($block_base . '/' . $block . '.scss')) {
				$deps = array();
		
				if ($dependencies && property_exists($dependencies, 'style')) {
					$deps = $dependencies->style;
				}
				wp_register_style($block . '-style', $is_dev ? $dist_base . '.css' : $dist_base . '.min.css', $deps, $ver);
			}

			if (file_exists($block_base . '/' . $block . '-editor.scss')) {
				$deps = array();
				if ($dependencies && property_exists($dependencies, 'editorStyle')) {
					$deps = $dependencies->editorStyle;
				}
				wp_register_style($block . '-editor-style', $is_dev ? $dist_base . '-editor.css' : $dist_base . '-editor.min.css', $deps, $ver);
			}

			if (file_exists($block_base . '/' . $block . '.js')) {
				$deps = array();
				if ($dependencies && property_exists($dependencies, 'script')) {
					$deps = $dependencies->script;
				}
				wp_register_script($block . '-script', $is_dev ? $dist_base . '.js' : $dist_base . '.min.js', $deps, $ver, true);
			}

			if (file_exists($block_base . '/' . $block . '-editor.js')) {
				$deps = array();
				if ($dependencies && property_exists($dependencies, 'editorScript')) {
					$deps = $dependencies->editorScript;
				}
				wp_register_script($block . '-editor-script', $is_dev ? $dist_base . '-editor.js' : $dist_base . '-editor.min.js', $deps, $ver, true);
			}
		}
	}
}

function get_blocks() {
	$theme = wp_get_theme();
	$blocks = get_option('cdhq_blocks');
	$version = get_option('cdhq_blocks_version');
	if (empty($blocks) || version_compare($theme->get('Version'), $version) || (function_exists( 'wp_get_environment_type' ) && 'production' !== wp_get_environment_type())) {
		$blocks = scandir(get_template_directory() . '/blocks/' );
		$blocks = array_values(array_diff($blocks, array('..', '.', '.DS_Store', '_base-block', '_block-import.scss', 'counties.js', 'utils.js')));
		
		update_option('cdhq_blocks', $blocks);
		update_option('cdhq_blocks_version', $theme->get('Version'));
	}
	return $blocks;
}

add_action('init', 'cdhq_register_blocks', 5);