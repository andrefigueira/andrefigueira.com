var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .sass('app.scss')
        .sass('dashboard.scss', 'public/css/dashboard.css')
        .sass('fixes/ie10-viewport-bug-workaround.scss')
        .babel('ie10-viewport-bug-workaround.js')
        .browserify('main.js')
        .copy(
            'node_modules/font-awesome/fonts',
            'public/fonts'
        )
        .copy(
            'node_modules/prismjs',
            'public/js/dependencies/prismjs'
        )
        .copy(
            'node_modules/admin-lte',
            'public/js/dependencies/admin-lte'
        )
    ;
});