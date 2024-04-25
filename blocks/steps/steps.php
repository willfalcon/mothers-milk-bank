<?php
  $classes = 'steps';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }

  $supports_array = WP_Block_Supports::get_instance()->apply_block_supports();
  $style = '';
  if (array_key_exists('style', $supports_array)) {
    $style .= ['style'];
  }
?>

<div class="<?= $classes ?>" style="<?= $style ?>">

<?php if (have_rows('steps')) : ?>
  <div class="swiper-pagination"></div>

  <div class="swiper steps-inner">
      <div class="swiper-wrapper">
        <?php while (have_rows('steps')): the_row(); ?>
          <div class="step swiper-slide">
            <?php $image = get_sub_field('illustration'); ?>
            <div class="step__image-wrapper">
              <?php if ($image) : ?>
              <img class="step__image" src="<?= $image['sizes']['medium_large']; ?>" alt="<?= $image['alt'] ?>" />
              <?php endif; ?>
            </div>
            <h2 class="step__heading"><?php the_sub_field('step_name'); ?></h2>
            <div class="step__description"><?php the_sub_field('description'); ?></div>
          </div>
        <?php endwhile; ?>
      </div>
    </div>
  <?php endif; ?>

  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>