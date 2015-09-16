'use strict';
 
var gulp = require('gulp'),
swig = require('gulp-swig');
 
gulp.task('html', function() {
  gulp.src('./src/html/templates/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('html:watch', function () {
  gulp.watch('./src/html/**/*.html', ['html']);
});
