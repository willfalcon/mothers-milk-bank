<!-- single-story.php -->

<?php get_header('plain'); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <div class="layout-columns">
    <article class="layout-column layout-column-main">
      <h1 class=""><?php the_title(); ?></h1>
      <?php the_field('story'); ?>
    </article>
    <?php get_sidebar('stories'); ?>
  </div>
  
  <div style="fill: white; background: var(--mmb-light); ">
    <?php get_template_part('parts/waves');?>
  </div>

<?php 
  $home = get_option('page_on_front');
  $home = get_post( $home );
  $blocks = parse_blocks( $home->post_content );
  $latest_stories = check_blocks($blocks, 'cdhq/latest-stories');
  
  echo render_block($latest_stories);


  endwhile; endif;

  get_footer(); 
  
?>
