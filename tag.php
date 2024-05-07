<!-- tag.php -->

<?php 
  get_header('plain'); 
?>

<div class="page-title">
  <h1 class="text-center"><?php the_archive_title(); ?></h1>
</div>

<?php 
  $description = tag_description();
  if ($description) : 
?>
  <div class="content-width tag-description">
    <?= $description ?>
  </div> 
<?php endif; ?>

<?php get_template_part('parts/tags'); ?>

<?php if ( have_posts() ) : ?>
  <ul class="stories-list swiper-wrapper">
    <?php 
      while ( have_posts() ) : the_post();
        get_template_part('parts/story');
      endwhile; 
    ?>
  </ul>
<?php endif; ?>

<?php 
  get_template_part('parts/pagination'); 
  get_template_part('parts/spacer'); 
?>

<?php get_footer(); ?>
