<?php
  $classes = 'latest-stories';
  if (array_key_exists('backgroundColor', $block)) {
    $classes .= ' has-' . $block['backgroundColor'] . '-background-color has-background';
  }
  if (get_field('top_padding')) {
    $classes .= ' extra-top-padding';
  }
  if (get_field('bottom_padding')) {
    $classes .= ' extra-bottom-padding';
  }
  if (array_key_exists('align', $block)) {
  $classes .= ' align' . $block['align'];
}
?>

<div class="<?= $classes ?> swiper">

  <h2 class="latest-stories__heading"><?php _e('Stories', 'mmb'); ?></h2>

  <?php 
    $args = array(
      'post_type' => 'story',
      'posts_per_page' => 3 
    );
    $query = new WP_Query($args);
  ?>

  <?php if ($query->have_posts()) : ?>
    <ul class="latest-stories__list swiper-wrapper">
      <?php while ($query->have_posts()) : $query->the_post(); ?>
        <?php get_template_part('parts/story'); ?>
      <?php endwhile; ?>
    </ul>
    <div class="swiper-pagination"></div>
  <?php endif; ?>

</div>