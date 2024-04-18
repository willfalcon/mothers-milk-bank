<!-- 404.php -->

<?php 
  get_header();  

  $home = get_option('page_on_front');
  $home = get_post( $home );
  $blocks = parse_blocks( $home->post_content );
  $header = check_blocks($blocks, 'cdhq/home-header');
  if ($header) {
    $header = $header['attrs']['data'];
  }
  
  $image_id = $header['image'];
  $content = $header['content'];
  $buttons_count = $header['buttons'];
  $border = check_blocks($blocks, 'cdhq/waves-border');
  $columns = check_blocks($blocks, 'core/group');
  
    
  $header_index = array_find_index($blocks, function($block) {
    return $block['blockName'] === 'cdhq/home-header';;
  });
  unset($blocks[$header_index]);
?>

  <div class="page-content">

    <div class="home-header has-pink-background-color has-pink-fill-color alignfull overlap">
      
      <?php if ($image_id): ?>
        <?php $image = wp_get_attachment_image($image_id, 'medium_large', false, ['class' => 'home-header__image']) ?>
        <div class="home-header__image-wrapper">
          <?= $image ?>
        </div>
      <?php endif; ?>
    
      <div class="home-header__content">
        <h1 class="home-header__title"><?php _e('Page Not Found'); ?></h1>
        <?php if ($content) : ?>
          <p class="home-header__text">
            <?= $content ?>
          </p>
        <?php endif; ?>
        <?php if ($buttons_count > 0) : ?>
          <ul class="home-header__buttons">
            <?php $i = 0; while ($i < $buttons_count) : ?>
              <li class="home-header__button">
                <?php $link = $header["buttons_{$i}_link"]; ?>
                <?php if ($link): ?>
                  <a class="button" href="<?= $link['url'] ?>" target="<?= $link['target'] ?>">
                    <?= $link['title'] ?>
                  </a>
                <?php endif; ?>
              </li>
            <?php $i++; endwhile; ?>
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

    <?php
      foreach ($blocks as $block) {
        echo render_block($block);
      }
    ?>

  </div>

<?php get_footer(); ?>
