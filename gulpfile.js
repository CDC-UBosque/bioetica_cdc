/*
 * Build project assets with Gulp
 *
 * Installation (Node Package Manager):
 * > npm install -g gulp bower
 * > npm install && bower install
 *
 * Usage:
 * > gulp styles
 * > gulp scripts
 * > gulp watch
 * > gulp
 */
'use strict';

// Polyfill to avoid having nasty error messages
require('es6-promise').polyfill();

// global modules
var gulp = require('gulp');
var sass = require('node-sass');
var $    = require('gulp-load-plugins')();

// Default task
gulp.task('default', ['styles', 'scripts']);

// Compiles SASS code: gulp styles
gulp.task('styles', function() {
  return sass.render({
      file: 'src/scss/style.scss',
      outputStyle: 'compressed'
    }, function(error, result) {
      if (error) {
        console.log('Error compiling sass: ' + error.message);
      }
      else {
        var css = result.css.toString();

        $.file('style.css', css)
        .pipe($.autoprefixer({
          browsers: ['last 2 versions', 'ie >= 9'],
          cascade: false
        }))
        .pipe(gulp.dest('./css'));
      }
    });
});

// Compiles Javascript: gulp scripts
gulp.task('scripts', ['lint'], function() {
  return gulp.src([
    'src/js/theme.js',
    'src/js/bootstrap.js'
    ])
    .pipe($.include())
    .pipe($.babel())
    .pipe($.uglify()
      .on('error', function(e) { console.log(e); }))
    .pipe(gulp.dest('./js'));
});

// Lint Task: gulp lint
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'));
});

// Watch for code modifications: gulp watch
gulp.task('watch', function() {
    gulp.watch( 'src/scss/*.scss', ['styles'] );
    gulp.watch( 'src/js/*.js', ['scripts'] );
});