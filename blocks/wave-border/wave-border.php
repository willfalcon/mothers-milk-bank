<?php

$classes = 'wave-border';
if (array_key_exists('align', $block)) {
  $classes .= ' align' . $block['align'];
}
if (array_key_exists('backgroundColor', $block)) {
  $classes .= ' has-' . $block['backgroundColor'] . '-fill-color has-fill';
}
if (get_field('reverse')) {
  $classes .= ' reverse';
}

?>

<div class="<?= $classes ?>">
<?php get_template_part('parts/waves'); ?>
</div>