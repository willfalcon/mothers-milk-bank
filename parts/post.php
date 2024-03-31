<a class="post" href="<?php the_permalink(); ?>">
  <h3 class="post__title"><?php the_title(); ?></h3>
  <time class="post__date" datetime="<?= get_the_date('Y-m-d') ?>"><?php the_date( 'F j, Y' ); ?></time>
  <div class="post__excerpt"><?php the_excerpt(); ?></div>
  <span class="post__read-more button--small"><?php _e('Read More', 'mdhs'); ?></span>
</a>