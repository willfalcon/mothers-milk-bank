<?php 

  $classes = 'home-header';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
  if (array_key_exists('backgroundColor', $block)) {
    $classes .= ' has-' . $block['backgroundColor'] . '-background-color has-background';
  }
?>

<div class="<?= $classes ?>">

<?php $image = get_field('image'); ?>

<?php if ($image): ?>
<div class="home-header__image-wrapper">
  <img class="home-header__image" src="<?= $image['sizes']['medium_large'] ?>" alt="<?= $image['alt'] ?>" />
</div>
<?php endif; ?>

<div class="home-header__content">
  <h1 class="home-header__title"><?php the_title(); ?></h1>
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

<?php get_template_part('parts/waves'); ?>


</div>