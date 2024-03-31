<!-- category.php -->

<?php 
  get_header('plain'); 
  
  global $post;
  $page = get_page(get_option('page_for_posts'));
  setup_postdata($page);
?>

<div class="page-title">
  <h1 class="text-center"><?php single_cat_title(); ?></h1>
</div>

<?php if (get_the_content()) : ?>
  <div class="page-content">
    <?php the_content(); ?>
  </div>
<?php endif; ?>

<?php rewind_posts(); ?>

<?php if ( have_posts() ) : ?>
  <div class="layout-columns">
    <main class="layout-column layout-column-main">
      <div class="stories-list">
        <?php 
          while ( have_posts() ) : the_post();
            if (get_post_type() == 'event') {
              get_template_part('parts/event');
            } else {
              get_template_part('parts/post');
            }
          endwhile; 
        ?>
      </div>
    </main>
    <?php get_sidebar('news'); ?>
    
  </div>
  <?php endif; ?>

  <?php get_template_part('parts/pagination'); ?>

<?php get_footer(); ?>
