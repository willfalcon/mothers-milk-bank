<?php
  $classes = 'sub-pages';
  global $post;

  $parent;
  $parent_id;
  
  if ($post && $post->post_parent) {
    
    $link = get_the_permalink($post->post_parent);
    $parent = "<a class=\"sub-pages__parent-title\" href=\"$link\">";
    $parent .= get_the_title($post->post_parent);
    $parent .= '</a>';

    $parent_id = $post->post_parent;

  } else {
    $parent_title = get_the_title();
    $parent = '<span class="sub-pages__parent-title">';
    $parent .= $parent_title;
    $parent  .= '</span>';
    if ($post) {
      $parent_id = $post->ID;
    } else {
      $parent_id = get_option('page_on_front');
    }
    
  }
  
  $args = array(
      'sort_order' => 'ASC',
      'sort_column' => 'menu_order',
      'child_of' => $parent_id
    );
  $children = get_pages($args);

?>

<div class="sub-pages sidebar-menu">
  <?php // todo: make this a link if not on this page ?>
  <header class="sidebar-menu__header">
    <?= $parent ?>
  </header>
  <ul class="sidebar-menu__list">
    <?php foreach ($children as $child) : ?>
      <?php
        $current = $child->ID == get_the_ID();
        $link = get_the_permalink($child->ID);
        $opening_tag = $current ? '<span class="sidebar-menu__child-title">' : "<a class=\"sidebar-menu__child-title\" href=\"$link\">";
        $closing_tag = $current ? '</span>' : '</a>';
      ?>
      <li class="sidebar-menu__item">
        <?= $opening_tag ?>
          <?= get_the_title($child->ID); ?>
        <?= $closing_tag ?>
      </li>
    <?php endforeach; ?>
  </ul>
</div>