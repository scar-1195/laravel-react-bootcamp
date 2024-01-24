const mix = require('laravel-mix');

mix
  .js('resources/js/main.jsx', 'public/js')
  .react()
  .sass('resources/sass/app.scss', 'public/css');
