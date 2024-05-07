<?php

function cdhq_color_classes() {
  $colors = get_field('color_palette', 'option');

  if (is_array($colors)) {
    
    echo '<style>';
    foreach ($colors as $color) {
      $label = slugify($color['label']);
      $code = $color['color'];
      echo "
        .has-$label-underline {
          text-decoration: underline;
          text-decoration-color: $code;
          text-decoration-thickness: 2px;
          text-underline-offset: 2px;
        }
        .has-$label-fill-color {
          fill: $code;
        }
        .has-$label-fill-color svg {
          fill: $code;
        }
      "; 
    }
    echo '</style>';
  }
}

if (function_exists('get_field')) {  
  add_action('wp_head', 'cdhq_color_classes');
}