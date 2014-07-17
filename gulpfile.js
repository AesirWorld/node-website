var gulp = require('gulp'),
    nib = require('nib'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
    process.env.NODE_ENV = 'dev';

    nodemon({ script: 'server.js', ext: 'hbs js', ignore: ['node_modules/', 'test/', 'facets/*/test/'] })
        .on('restart', function () {
            console.log('Restarted!')
        })
})
/*
var footerScripts = [
  "static/js/jquery-2.1.0.min.js",
  "static/js/d3.js",
  "static/js/charts.js",
  "static/js/sh_main.js",
  "static/js/sh_javascript.min.js",
  "static/js/aristotle.js",
  "static/js/scripts.js",
  "static/js/google-analytics.js",
  "https://ssl.google-analytics.com/ga.js",
  "static/js/hiring.js"
];

gulp.task('concat', function () {
  gulp.src(footerScripts)
      .pipe(uglify())
      .pipe(concat('footer.min.js'))
      .pipe(gulp.dest('static/js/'))
})
*/

gulp.task('default', [])
