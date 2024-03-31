<?php

function cdhq_alert() {
  $activated = get_field('activate_alert', 'options');
  if (!$activated) return;
  $id = get_field('cookie_id', 'options');
  if (isset($_COOKIE[$id])) return;
  
  while (have_rows('alert_settings', 'options')) : the_row();
  
    $expiration = get_sub_field('alert_expiration', false);
    if ($expiration) {
      $expiration = new DateTime($expiration);
      $now = new DateTime();
      if ($now > $expiration) return;
    }

    $background = get_sub_field('background_color');

    $style = 'style="';
    if ($background) {
      $style .= "--color: $background;";
    }
    $delay = get_sub_field('alert_delay');
    $data = "";
    if ($delay) {
      $style .= "margin-top: -100%";
      $data .= "data-delay=\"$delay\"";
    }
    $style .= '"';
    
    $text = get_sub_field('alert_text');
    $button = get_sub_field('alert_button');
    

    echo 
    "<div class=\"alert\" id=\"cdhq-alert\"$style $data data-id=\"$id\">
      <div class=\"alert__inner\">
        <p class=\"alert__text\">$text</p>
        <a class=\"alert__button button\" href=\"{$button['url']}\" target=\"{$button['target']}\">
          {$button['title']}
        </a>
        <button class=\"alert__close\" id=\"close-alert\" aria-label=\"Close alert\">
          <span></span>
          <span></span>
        </button>
      </div>
    </div>";
    
  endwhile;
}

add_action('wp_body_open', 'cdhq_alert');