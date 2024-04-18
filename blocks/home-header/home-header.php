<?php 

  $classes = 'home-header';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
  if (get_field('overlap')) {
    $classes .= ' overlap';
  }
  if (array_key_exists('backgroundColor', $block)) {
    $classes .= ' has-' . $block['backgroundColor'] . '-background-color has-background';
    $classes .= ' has-' . $block['backgroundColor'] . '-fill-color has-fill';
  }
  $animation = get_field('wave');

?>

<div class="<?= $classes ?>" data-animation="<?= $animation['animation'] ?>" data-duration="<?= $animation['duration'] ?>">

<?php $image = get_field('image'); ?>

<?php if ($image): ?>
<div class="home-header__image-wrapper">
  <img class="home-header__image" src="<?= $image['sizes']['medium_large'] ?>" alt="<?= $image['alt'] ?>" />
</div>
<?php endif; ?>

<div class="home-header__content">
  <?php if (get_field('content')) : ?>
    <p class="home-header__text">
      <?php the_field('content'); ?>
    </p>
  <?php endif; ?>
  <?php if (have_rows('buttons')): ?>
    <ul class="home-header__buttons">
      <?php while (have_rows('buttons')): the_row(); ?>
        <li class="home-header__button">
          <?php $link = get_sub_field('link'); ?>
          <?php if ($link): ?>
            <a class="button" href="<?= $link['url'] ?>" target="<?= $link['target'] ?>">
              <?= $link['title'] ?>
            </a>
          <?php endif; ?>
        </li>
      <?php endwhile; ?>
    </ul>
  <?php endif; ?>
</div>

  <div class="waves-wrapper">
    <div class="waves-wrapper-inner">
      <?php get_template_part('parts/waves'); ?>
      <?php get_template_part('parts/waves'); ?>
    </div>
  </div>

</div>