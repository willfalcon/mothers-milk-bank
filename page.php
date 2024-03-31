<!-- page.php -->

<?php 
  $blocks = parse_blocks( $post->post_content );
  // Test whether the first block is the page or homepage header
  $heroForTitle = $blocks ? $blocks[0]['blockName'] == 'cdhq/page-header' || $blocks[0]['blockName'] == 'cdhq/home-header' : false;

  if (!$heroForTitle) {
    get_header('plain');
  } else {
    get_header();
  }
?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  
  <?php if ( ! $heroForTitle ) : ?>
    <?php // Show the regular page title if the first block is not a header block. ?>
    <div class="page-title">
      <h1><?php the_title(); ?></h1>
      <!-- <?php get_template_part('parts/waves'); ?> -->
    </div>
  <?php endif; ?>


  <div class="page-content">
    <?php the_content(); ?>
  </div>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
