<?php 
  $args = array(
    'post_type' => 'story',
    'posts_per_page' => 5,
    'orderby' => 'rand'
  );
  $query = new WP_Query($args);
?>


<aside id="sidebar-stories" class="layout-column layout-column-aside">
  <div class="sidebar-menu">
    <header class="sidebar-menu__header">
      <h3 class="sidebar-menu__parent-title"><?php _e('More Stories', 'mmb'); ?></h3>
    </header>
    <?php if ($query->have_posts()) : ?>
      <ul class="sidebar-menu__list" data-level="0">
        <?php while ($query->have_posts()) : $query->the_post(); ?>
          <li class="sidebar-menu__item">
            <a class="sidebar-menu__child-title" href="<?php the_permalink() ?>">
              <?php the_title(); ?>
            </a>
          </li>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>
  </div>
</aside>