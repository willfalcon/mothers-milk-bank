<?php

function cdhq_color_classes() {
  $colors = get_field('color_palette', 'option');

  echo '<style>';
  foreach ($colors as $color) {
    echo '.has-' . slugify($color['label']) . '-underline {
      text-decoration: underline;
      text-decoration-color: ' . $color['color'] . ';
      text-decoration-thickness: 2px;
      text-underline-offset: 2px;
    }';
  }
  echo '</style>';
}

if (function_exists('get_field')) {  
  add_action('wp_head', 'cdhq_color_classes');
}