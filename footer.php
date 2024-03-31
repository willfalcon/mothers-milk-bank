    </div>
    
    <footer class="footer">

      <?php get_template_part('parts/waves'); ?>
      
      <div class="footer-logo">
        <img class="footer-logo__logo" src="<?php echo get_template_directory_uri() . '/dist/mmbm_light.png'; ?>" alt="<?php bloginfo('name'); ?>" />  
      </div>

      <?php if (get_field('footer_message', 'options')) : ?>
        <div class="footer__message">
          <?php the_field('footer_message', 'options'); ?>
        </div>
      <?php endif; ?>
      
      <div class="footer__info">
        <div class="footer__contact">
          <?php if (get_field('address', 'options')) : ?>
            <address class="footer__address"><?php the_field('address', 'options'); ?></address>
          <?php endif; ?>
          <?php if (get_field('phone', 'options')) : ?>
            <?php $phone = format_phone(get_field('phone', 'options')); ?>
            <a class="footer__phone" href="<?= $phone['href'] ?>"><?= $phone['display'] ?></a>
          <?php endif; ?>
        </div>

        <?php
          wp_nav_menu( 
            array(
              'theme_location' => 'main_menu',
              'menu_class' => 'footer-nav__menu main-menu',
              'container' => null,
            )
          );
          wp_nav_menu( 
            array(
              'theme_location' => 'admin_menu',
              'menu_class' => 'footer-nav__menu admin-menu',
              'container' => null,
            )
          );
        ?>
      </div>
    </div>

    
    <?php wp_footer(); ?>
  </body>
</html>