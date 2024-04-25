<?php
  $classes = 'locations';
  if (array_key_exists('align', $block)) {
    $classes .= ' align' . $block['align'];
  }
?>

<div class="<?= $classes ?>" id="mmb-locations">
</div>