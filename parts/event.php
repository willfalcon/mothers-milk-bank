<?php
  $event_date = get_field( 'event_date');
  // write_log($event_date);
  $date = date_create($event_date);
  $event_time = get_field( 'event_time');
  
?>


<a class="post post--event" href="<?php the_permalink(); ?>">
  <h3 class="post__title"><?php the_title(); ?></h3>
  <time class="post__cal cal-date" datetime="<?= date_format($date, 'Y-m-d') ?>">
    <span class="cal-date__month">
      <?= date_format($date, 'M'); ?>
    </span>
    <span class="cal-date__date">
      <?= date_format($date, 'd'); ?>
    </span>
  </time>
  <!-- <div class="post__excerpt"><?php the_excerpt(); ?></div> -->
  <?php if (get_field('event_location')) : ?>
    <span class="post__location">
      <i class="fa-solid fa-location-dot"></i>
      <?php the_field('event_location'); ?>
    </span>
  <?php endif; ?>
  <?php if ($event_time) : $time = date_create($event_time); ?>
    <time class="post__time" datetime="<?= date_format($time, 'H:i') ?>">
    <i class="fa-solid fa-clock"></i>
    <?= $event_time ?>
  </time>
  <?php endif; ?>  

  <?php 
    
    $button_text = get_field('button_text'); 
    if (get_field('text_after_date')) {
      $end_date = get_field('end_date');
      $end_time = get_field('end_time');
      $end = $date;
      if ($end_date) {
        $end = date_create($end_date);
      }
      if ($end_time) {
        $end_time = date_create($end_time);
        date_time_set($end, date_format($end_time, 'H'), date_format($end_time, 'i'));
      } else if ($event_time) {
        $time = date_create($event_time);
        date_time_set($end, date_format($time, 'H'), date_format($time, 'i'));
      }
      if ($end < date_create()) {
        $button_text = get_field('after_date_button_text');
      }
    }
  ?>
  <span class="post__read-more button--small"><?= $button_text ? $button_text : __('Read More', 'mmb'); ?></span>
</a>