<?php

/**
 * Register API Endpoints
 */
add_action( 'rest_api_init', function () {
  register_rest_route( 'mmb/v1', '/alert', array(
    'methods' => \WP_REST_Server::READABLE,
    'callback' => 'cdhq_api_get_alert',
    'permission_callback' => '__return_true'
    ) );
  register_rest_route( 'mmb/v1', '/get-field/(?P<post>\S+)/(?P<key>\S+)', array(
    'methods' => \WP_REST_Server::READABLE,
    'callback' => 'cdhq_api_get_field',
    'permission_callback' => '__return_true'
    ) );
  register_rest_route( 'mmb/v1', '/clear-locations', array(
    'methods' => 'get',
    'callback' => 'cdhq_api_clear_locations',
    'permission_callback' => '__return_true'
    ) );

  // register_rest_route( 'mdhs/v1', '/search/(?P<s>[a-zA-Z0-9-]+)', array(
  //   'methods' => 'GET',
  //   'callback' => 'cdhq_api_search',
  //   'permission_callback' => '__return_true'
  // ));
  register_rest_route('mmb/v1', '/locations', array(
    'methods' => \WP_REST_Server::READABLE,
    'callback' => 'cdhq_api_get_locations',
    'permission_callback' => '__return_true'
  ));

  register_rest_route('mmb/v1', '/stories/(?P<page>\S+)', array(
    'methods' => \WP_REST_Server::READABLE,
    'callback' => 'cdhq_api_get_stories',
    'permission_callback' => '__return_true'
  ));

} );

function cdhq_api_get_stories($data) {
  $stories = get_posts(array(
    'post_type' => 'story',
    'paged' => $data['page'],
    'posts_per_page' => 3
  )); 

  foreach ($stories as $story) {
    $permalink = get_the_permalink($story->ID);
    $title = get_field('source', $story->ID) ? get_field('source', $story->ID) : get_the_title($story->ID);
    $excerpt = get_field('excerpt', $story->ID);
    $story->permalink = $permalink;
    $story->title = $title;
    $story->excerpt = $excerpt;
  }
  return $stories;
}



function cdhq_api_get_alert() {
  $activated = get_field('activate_alert', 'options');
  $alert = get_field('alert_settings', 'options');
  $id = get_field('cookie_id', 'options');

  $res = new stdClass();
  $res->activated = $activated;
  $res->alert = $alert;
  $res->id = $id;
  return $res;
}


function cdhq_api_get_field($data) {
  return get_field($data['key'], $data['post']);
}

function cdhq_api_get_locations() {
  $locations = get_field('locations', 'options');

  $token = get_field('access_token', 'options');

  $locations = geo_check_locations($locations);
  $res = new stdClass();
  $res->locations = $locations;
  $res->token = $token; 
  return $res;
}


function geo_check_locations($locations) {
  global $mapbox_token;
  $mapbox_token = get_field('access_token', 'options');
  $geo_check_locations = array_map(function($location, $i) {
    global $mapbox_token;
    if (array_key_exists('coordinates', $location) && $location['coordinates']) {
      return $location;
    }
    $coordinates = geocode($location['address'], $mapbox_token);
    $location['coordinates'] = $coordinates;
    update_row('locations', $i + 1, $location, 'options');
    return $location;
  }, $locations, array_keys($locations));
  return $geo_check_locations; 
}

function geocode($address, $mapbox_token) {
  
  $url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' . urlencode($address);
  $url .= '&access_token=' . $mapbox_token;
  $url .= '&country=us';
  $url .= '&autocomplete=false';

  $response = wp_remote_get($url);
  $body = wp_remote_retrieve_body($response);
  $resp = json_decode($body);

  return $resp->features[0]->geometry->coordinates;
  
}

function cdhq_api_clear_locations() {
  
  while (have_rows('locations', 'options')) { 
    the_row();
    update_sub_field('coordinates', null);
  }

  return get_field('locations', 'options');
}