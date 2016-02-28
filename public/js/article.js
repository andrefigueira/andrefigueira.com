(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./lib/reading-time');

},{"./lib/reading-time":2}],2:[function(require,module,exports){
/*!
 * reading-time
 * Copyright (c) 2014 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

'use strict';

function readingTime(text, options) {
	var words = 0, start = 0, end = text.length - 1, i;

	options = options || {};

	// use provided function if available
	wordBound = options.wordBound || wordBound;

	// fetch bounds
	while (wordBound(text[start])) start++;
	while (wordBound(text[end])) end--;

	// calculates the number of words
	for (i = start; i <= end; ) {
		for ( ; i <= end && !wordBound(text[i]); i++) ;
		words++;
		for ( ; i <= end && wordBound(text[i]); i++) ;
	}

	// reading time stats
	var minutes = words / 200;
	var time = minutes * 60 * 1000;
	var displayed = Math.ceil(minutes);

	return {
		text: displayed + ' min read',
		minutes: minutes,
		time: time,
		words: words
	};
}

var wordBound = function(c) {
	return (
		(' ' == c)  ||
		('\n' == c) ||
		('\r' == c) ||
		('\t' == c)
	);
};

/**
 * Export
 */
module.exports = readingTime;

},{}],3:[function(require,module,exports){
'use strict';

$(function () {
    var readingTime = require('reading-time');
    var content = $('.blog-post-content').html();
    var stats = readingTime(content);

    $('.reading-time').html(stats.text);
});

},{"reading-time":1}]},{},[3]);

//# sourceMappingURL=article.js.map
