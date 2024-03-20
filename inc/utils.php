<?php

if (!function_exists('array_find')) {
    function array_find($xs, $f) {
      foreach ($xs as $x) {
        if (call_user_func($f, $x) === true)
        return $x;
    }
    return null;
  }
}

if (!function_exists('array_find_index')) {
  function array_find_index($xs, $f) {
    $i = 0;
    foreach ($xs as $x) {
      if (call_user_func($f, $x) === true) {
        return $i;
      } else {
        $i++;
      }
    }
    return null;
  }
}  
