<?php

/**
 * Register API Endpoints
 */
add_action( 'rest_api_init', function () {
  register_rest_route( 'mmb/v1', '/alert', array(
    'methods' => 'GET',
    'callback' => 'cdhq_api_get_alert',
    'permission_callback' => '__return_true'
    ) );
  register_rest_route( 'mmb/v1', '/get-field/(?P<post>\S+)/(?P<key>\S+)', array(
    'methods' => 'GET',
    'callback' => 'cdhq_api_get_field',
    'permission_callback' => '__return_true'
    ) );

  // register_rest_route( 'mdhs/v1', '/search/(?P<s>[a-zA-Z0-9-]+)', array(
  //   'methods' => 'GET',
  //   'callback' => 'cdhq_api_search',
  //   'permission_callback' => '__return_true'
  // ));

} );



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
