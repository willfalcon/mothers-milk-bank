<?php

  register_sidebar( array(
    'name' => __('News Archives Sidebar', 'mmb'),
    'id' => 'news',
    'description' => __('Sidebar for the News Archive page and Category Archive pages.', 'mmb'),
    'before_widget' => '',
    'after_widget' => ''
  ));

  register_sidebar( array(
    'name' => __('Page Layout Sidebar', 'mmb'),
    'id' => 'page-layout',
    'description' => __('Sidebar for the Page Layout template.', 'mmb'),
    'before_widget' => '',
    'after_widget' => ''
  ));
