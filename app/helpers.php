<?php

function pp($data, $die = FALSE)
{
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    if($die) die('End of Script');
}

function announce($data, $die = FALSE)
{
    print_r($data);
    echo '
';
    if($die) exit;
}