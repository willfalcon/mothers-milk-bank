<?php
  $page_for_posts = get_option( 'page_for_posts' ); 
  $cats = get_categories(array(
    'parent' => 0
  )); 
  
?>

<div class="categories sidebar-menu">
  <header class="categories__header sidebar-menu__header">
    <a class="sidebar-menu__parent-title" href="<?= get_the_permalink( $page_for_posts ); ?>"><?= get_the_title( $page_for_posts ); ?></a>
  </header>
  <ul class="categories__list sidebar-menu__list" data-level="0">
    <?php foreach ($cats as $cat) : ?>
      <?php 
        $child_cats = get_categories(array(
          'parent' => $cat->term_id
        ));
        $has_children = !empty($child_cats);
      ?>
        <li class="categories__item sidebar-menu__item<?php echo $has_children ? ' has_children' : ''; ?>">
          <a class="sidebar-menu__child-title" href="<?= get_category_link( $cat ); ?>">
            <?= $cat->name; ?>
          </a>
            <?php if ($has_children) : ?>
              <ul class="sidebar-menu__sub-menu">
                <?php foreach ($child_cats as $child) : ?>
                  <li class="sidebar-menu__item">
                    <a class="sidebar-menu__child-title" href="<?= get_category_link( $child ); ?>">
                      <?= $child->name; ?>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </li>
  </ul>
</div>