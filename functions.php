<?php

/**
 * Styles and scripts
 */

function cdhq_theme_assets() {
$ver = wp_get_theme()->get('Version');
$env = wp_get_environment_type();



  if ($env == 'development' || $env == 'local') {
    wp_enqueue_style( 'normalize', get_template_directory_uri() . '/dist/normalize.css' );
    wp_enqueue_style( 'build_styles', get_template_directory_uri() . '/dist/styles.css', array(), $ver );
    wp_enqueue_script( 'build_js', get_template_directory_uri() . '/dist/index.js', array(), $ver, true );
  } else {
    wp_enqueue_style( 'normalize', get_template_directory_uri() . '/dist/normalize.min.css' );
    wp_enqueue_style( 'build_styles', get_template_directory_uri() . '/dist/styles.min.css', array(), $ver );
    wp_enqueue_script( 'build_js', get_template_directory_uri() . '/dist/index.min.js', array(), $ver, true );
  }
}

function cdhq_enqueue_fonts() {
  wp_enqueue_style( 'cdhq-fonts', 'https://use.typekit.net/oft8fxi.css', array(), null );
}

function cdhq_enqueue_fontawesome() {
  $ver = wp_get_theme()->get('Version');
  $env = wp_get_environment_type();
  if ($env == 'development' || $env == 'local') {
    wp_enqueue_script( 'fontawesome-brands', get_template_directory_uri() . '/inc/fontawesome/brands.js', array(), $ver, true );
    wp_enqueue_script( 'fontawesome-solid', get_template_directory_uri() . '/inc/fontawesome/solid.js', array(), $ver, true );
    wp_enqueue_script( 'fontawesome-fontawesome', get_template_directory_uri() . '/inc/fontawesome/fontawesome.js', array(), $ver, true );
  } else {
    wp_enqueue_script( 'fontawesome-brands', get_template_directory_uri() . '/inc/fontawesome/brands.min.js', array(), $ver, true );
    wp_enqueue_script( 'fontawesome-solid', get_template_directory_uri() . '/inc/fontawesome/solid.min.js', array(), $ver, true );
    wp_enqueue_script( 'fontawesome-fontawesome', get_template_directory_uri() . '/inc/fontawesome/fontawesome.min.js', array(), $ver, true );
  }
}
add_action( 'wp_enqueue_scripts', 'cdhq_enqueue_fonts' ); 
add_action( 'wp_enqueue_scripts', 'cdhq_enqueue_fontawesome' ); 
add_action( 'wp_enqueue_scripts', 'cdhq_theme_assets' ); 

 function cdhq_block_editor_assets() {
  $ver = wp_get_theme()->get('Version');
  $env = wp_get_environment_type();
  $is_dev = $env == 'development' || $env == 'local';
  $base = get_template_directory_uri() . '/dist';


  $current_screen = false;
  if (function_exists('get_current_screen')) {
    $current_screen = get_current_screen();
  }
	
	if ($current_screen && $current_screen->id != 'widgets') {
    wp_enqueue_style( 'editor-styles', $is_dev ? $base . '/editor-styles.css' : $base . '/editor-styles.min.css', array(), $ver );
    wp_enqueue_script( 'editor-customizations', $is_dev ? $base . '/editor.js' : $base . '/editor.min.js', array('wp-blocks', 'wp-dom-ready', 'wp-plugins', 'wp-edit-post', 'wp-hooks'), $ver, true );
  }
 }
 add_action( 'enqueue_block_assets', 'cdhq_enqueue_fonts' ); 
 add_action( 'enqueue_block_assets', 'cdhq_enqueue_fontawesome' ); 
 add_action( 'enqueue_block_assets', 'cdhq_block_editor_assets' );


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
include_once('inc/widgets.php');

/**
 * add color classes in head
 */
include_once('inc/colors.php');

include_once('inc/alert.php');


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



/**
 * Set color palette options on acf color fields
 */
function acf_load_color_field_choices( $field ) {
  // reset choices
  $field['choices'] = array();
  // if has rows
  $field['choices'][''] = '';
  if( have_rows('color_palette', 'option') ) {
      // while has rows
      while( have_rows('color_palette', 'option') ) {
          // instantiate row
          the_row();
          // vars
          $color = get_sub_field('color');
          $label = get_sub_field('label');
          // append to choices
          $field['choices'][ $color ] = $label;   
      }
  }
  // return the field
  return $field;
}
add_filter('acf/load_field/name=background_color', 'acf_load_color_field_choices');

function acf_load_color_slug_field_choices( $field ) {
  // reset choices
  $field['choices'] = array();
  // if has rows
  $field['choices'][''] = '';
  if( have_rows('color_palette', 'option') ) {
    // while has rows
    while( have_rows('color_palette', 'option') ) {
      // instantiate row
      the_row();
      // vars
      $color = slugify(get_sub_field('label'));
      $label = get_sub_field('label');
      // append to choices
      $field['choices'][ $color ] = $label;   
    }
  }
  // return the field
  return $field;
}
add_filter('acf/load_field/name=header_background_color', 'acf_load_color_slug_field_choices');


function cdhq_modify_posts_query( $query ) {
  if ( is_home() && $query->is_main_query() ) {
    $query->set( 'post_type', array( 'post', 'event' ) );
    return $query;
  }
  if (is_post_type_archive('story')) {
    $query->set('posts_per_page', 9);
    return $query;
  }
  if (is_tag() && $query->is_main_query()) {
    $query->set( 'post_type', array('post', 'story'));
    $query->set('posts_per_page', 9);
    return $query;
  }
  return $query;
}
add_action( 'pre_get_posts', 'cdhq_modify_posts_query' );


function remove_archive_title_prefix($prefix) {
  return '';
}

add_filter('get_the_archive_title_prefix', 'remove_archive_title_prefix');



/**
 * Set block patterns
*/
function cdhq_block_patterns() {

  register_block_pattern_category(
    'cdhq-patterns',
    array( 'label' => __( 'MMB Templates', 'mmb' ) )
  );

  include 'inc/patterns.php';

  register_block_pattern(
    'cdhq/page-pattern',
    array(
      'title' => __('Page Pattern', 'mmb'),
      'description' => __('The block layout to use for most new pages.', 'mmb'),
      'categories' => array('cdhq-patterns', 'featured'),
      'content' => $page_pattern
    )
  );
}

add_action('init', 'cdhq_block_patterns');


/**
 * Excerpt length and more tags
 */

function custom_excerpt_length( $length ) {
  return 30;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

function cdhq_excerpt_more( $more ) {
  /**
    * Filters the excerpt "read more" string.
    *
    * @param string $more "Read more" excerpt string.
    * @return string (Maybe) modified "read more" excerpt string.
  */
  return '...';
}
add_filter( 'excerpt_more', 'cdhq_excerpt_more' );


/**
 * enqueue block assets for 404 page
 */

function cdhq_enqueue_404_assets() {
  $ver = wp_get_theme()->get('Version');
  $env = wp_get_environment_type();
  $dev = $env == 'development' || $env == 'local';
  if (is_404()) {
    wp_enqueue_style('home-header-style');
    wp_enqueue_style('latest-stories-style');
    wp_enqueue_script('latest-stories-script');
  }
}

add_action( 'wp_enqueue_scripts', 'cdhq_enqueue_404_assets' ); 

if (!function_exists('check_blocks')) {
	function check_blocks($blocks, $search_block) {
		if (!is_array($blocks)) {
			$blocks = parse_blocks($blocks);
		}
		foreach($blocks as $block) {
			if ($block['blockName'] == $search_block) {
				return $block;
			} 
			if ($block['innerBlocks']) {
				$returned = check_blocks($block['innerBlocks'], $search_block);
				if ($returned) {
					return $returned;
				}
			}
		}
		return null;
	}
}