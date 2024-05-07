<?php 
  $tags = get_tags();
  $stories_archive_permalink = get_post_type_archive_link('story');
  if ($tags) :
?>

  <div class="tags">
    <?php if (is_tag()) : ?>
      <a class="tag" href="<?= $stories_archive_permalink ?>">All Stories</a>
    <?php endif; ?>
    <?php foreach ($tags as $tag) : ?>
      <a class="tag" href="<?= get_tag_link($tag) ?>">
        <?= $tag->name ?>
      </a>
    <?php endforeach; ?>
  </div>

<?php endif; ?>