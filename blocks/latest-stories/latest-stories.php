<?php
  $classes = 'latest-stories';
  if (array_key_exists('backgroundColor', $block)) {
    $classes .= ' has-' . $block['backgroundColor'] . '-background-color has-background';
  }
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
  $animation = get_field('animation');
  $heading_class = 'latest-stories__heading';
  if ($animation) {
    $heading_class .= " animation-$animation";
  }

$style = WP_Block_Supports::get_instance()->apply_block_supports()['style'];
?>

<div class="<?= $classes ?> swiper" style="<?= $style ?>">

  <h2 class="<?= $heading_class ?>"><?php _e('Stories', 'mmb'); ?></h2>

  <?php 
    $args = array(
      'post_type' => 'story',
      'posts_per_page' => 3,
      'orderby' => 'rand'
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