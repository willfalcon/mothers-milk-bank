<!-- template-page-layout.php -->
<?php 
/**
 * Template Name: Page Layout
 */ 
?>

<?php 

  get_header();

?>


<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


  <div class="page-content">

    <?php get_template_part('parts/page-header'); ?>

    <div class="layout-columns">
      <?php get_sidebar('page-layout'); ?>
      <main class="layout-column layout-column-main">
        <?php the_content(); ?>
      </main>
    </div>
    
    <div style="height:200px;" aria-hidden="true"></div>

  </div>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
