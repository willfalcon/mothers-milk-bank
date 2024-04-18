<?php
  global $post;
  $permalink = get_the_permalink();
  
?>
<a href="<?= $permalink; ?>" <?php post_class('latest-stories__item swiper-slide story'); ?>>
    <header class="story__header">
      <h3 class="story__heading">
        <?= get_field('source', $post->ID) ? get_field('source', $post->ID) : get_the_title() ?>
      </h3>
    </header>
    <div class="quote">
      <span>""</span>
    </div>
    <p class="story__excerpt">
      <?php the_field('excerpt', $post->ID)?>
    </p>
    <span class="story__arrow">
      <i class="fa-solid fa-arrow-right fa-xl"></i>
    </span>
</a>