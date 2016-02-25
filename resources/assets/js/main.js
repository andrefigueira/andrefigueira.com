window.$ = window.jQuery = require('jquery')
require('bootstrap-sass');
require('jquery.backstretch');

$(document).ready(function() {
    $('.masthead').backstretch('img/laptop.jpg');
});