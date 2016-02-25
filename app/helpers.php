<?php

/**
 * Parses markdown using Parsedown
 *
 * @param $text
 * @return string
 */
function markdown($text) {
    $parsedown = new Parsedown();

    return $parsedown->parse($text);
}