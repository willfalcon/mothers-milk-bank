<?php

/**
 * Styles and scripts
 */

 function cdhq_theme_assets() {
  $ver = wp_get_theme()->get('Version');
  $env = wp_get_environment_type();
  
  wp_enqueue_style( 'cdhq-fonts', 'https://use.typekit.net/oft8fxi.css', array(), null );

    if ($env == 'development' || $env == 'local') {
      wp_enqueue_script( 'fontawesome-brands', get_template_directory_uri() . '/inc/fontawesome/brands.js', array(), $ver, true );
      wp_enqueue_script( 'fontawesome-solid', get_template_directory_uri() . '/inc/fontawesome/solid.js', array(), $ver, true );
      wp_enqueue_script( 'fontawesome-fontawesome', get_template_directory_uri() . '/inc/fontawesome/fontawesome.js', array(), $ver, true );
      wp_enqueue_style( 'normalize', get_template_directory_uri() . '/dist/normalize.css' );
      wp_enqueue_style( 'build_styles', get_template_directory_uri() . '/dist/styles.css', array(), $ver );
      wp_enqueue_script( 'build_js', get_template_directory_uri() . '/dist/index.js', array(), $ver, true );
    } else {
      wp_enqueue_script( 'fontawesome-brands', get_template_directory_uri() . '/inc/fontawesome/brands.min.js', array(), $ver, true );
      wp_enqueue_script( 'fontawesome-solid', get_template_directory_uri() . '/inc/fontawesome/solid.min.js', array(), $ver, true );
      wp_enqueue_script( 'fontawesome-fontawesome', get_template_directory_uri() . '/inc/fontawesome/fontawesome.min.js', array(), $ver, true );
      wp_enqueue_style( 'normalize', get_template_directory_uri() . '/dist/normalize.min.css' );
      wp_enqueue_style( 'build_styles', get_template_directory_uri() . '/dist/styles.min.css', array(), $ver );
      wp_enqueue_script( 'build_js', get_template_directory_uri() . '/dist/main.min.js', array('promise_polyfill', 'classlist_polyfill'), $ver, true );
    }
 }

 add_action( 'wp_enqueue_scripts', 'cdhq_theme_assets' ); 


/**
 * Load theme textdomain for translations
 */
function cdhq_load_theme_textdomain() {
  $text_domain = 'mmb';
  load_theme_textdomain( $text_domain, get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'cdhq_load_theme_textdomain' );


/* Add Theme Supports */
add_theme_support( 'menus' );
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'align-wide' );
if (!isset($content_width)) {
  $content_width = 1200;
}

/**
 * write_log
 * ea_pp
 */
include_once('inc/debugging.php');

/**
 * slugify
 * format_phone
 */
include_once('inc/formatting_utils.php');

/**
 * add_block_category
 */
include_once('blocks/blocks.php');

/**
 * cc_mime_types
 * fix_svg
 * add_image_size
 */
include_once('inc/media.php');

include_once('inc/require-plugins.php');
include_once('inc/api.php');

/**
 * array_find
 * array_find_index
 */
include_once('inc/utils.php');

/**
 * add color classes in head
 */
include_once('inc/colors.php');



/**
 * Create Menu Locations
 */
function register_theme_menus() {
  register_nav_menus(
    array(
      'main_menu' => __('Main Menu', 'mmb'),
      'admin_menu' => __('Admin Menu', 'mmb'),
    )
  );
}
add_action( 'init', 'register_theme_menus' );


function cdhq_wp_nav_menu_objects( $items, $args ) {
  if ($args->menu->slug == 'main-menu') {
    foreach ($items as $item) {
      $small_label = get_field('small_label', $item);
      $large_label = get_field('large_label', $item);
      $item->title = "<span class=\"small-label\">$small_label</span><span class=\"large-label\">$large_label</span>";
    }
  }
  return $items;
}

add_filter('wp_nav_menu_objects', 'cdhq_wp_nav_menu_objects', 10, 2);


/**
 * Set login screen logo
 */
function cdhq_login_logo() {
	// Change these
	$actual_height = 364;
	$actual_width = 724;
  $logo_filename = 'ms-milkbank_logo.png';

  $logo_height = 320 * $actual_height / $actual_width;
	?>
		<style type="text/css">
			#login h1 a, .login h1 a {
				background-image: url(<?php echo get_stylesheet_directory_uri() . '/dist/' . $logo_filename ?>);
				height: <?php echo $logo_height; ?>px;
				width:320px;
				background-size: 320px <?php echo $logo_height; ?>px;
				background-repeat: no-repeat;
				padding-bottom: 30px;
			}
		</style>
	<?php
}
add_action( 'login_enqueue_scripts', 'cdhq_login_logo' );


/**
 * change logo link to homepage on login page
 */
function cdhq_login_logo_url() {
	return home_url();
}
add_filter( 'login_headerurl', 'cdhq_login_logo_url' );

