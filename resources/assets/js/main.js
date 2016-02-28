window.$ = window.jQuery = require('jquery')
require('bootstrap-sass');
require('jquery.backstretch');

$(function() {
    $('.masthead').backstretch('img/laptop.jpg');
});