$(function() {
    var readingTime = require('reading-time');
    var content = $('.blog-post-content').html();
    var stats = readingTime(content);

    $('.reading-time').html(stats.text);
});