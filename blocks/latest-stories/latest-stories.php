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
        <?php
          global $post;
          $permalink = get_the_permalink();
          $opening_tag = $is_preview ? '<span class="story__link">' : "<a class=\"story__link\" href=\"{$permalink}\">";
          $closing_tag = $is_preview ? '</span>' : '</a>';
        ?>
        <li class="latest-stories__item swiper-slide story">
          <?= $opening_tag ?>
            <header class="story__header">
              <h3 class="story__heading">
                <?= get_field('source', $post->ID) ? get_field('source', $post->ID) : get_the_title() ?>
              </h3>
            </header>
            <div class="quote">
              <span>""</span>
            </div>
            <p class="story__excerpt">
              <?= get_field('excerpt', $post->ID) ? get_field('excerpt', $post->ID) : get_the_excerpt(); ?>
            </p>
            <span class="story__arrow">
              <i class="fa-solid fa-arrow-right fa-xl"></i>
            </span>
          <?= $closing_tag ?>
        </li>
      <?php endwhile; ?>
    </ul>
    <div class="swiper-pagination"></div>
  <?php endif; ?>

</div>