'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon');
 
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
	.pipe(sass({
		includePaths: bourbon.includePaths
	}).on('error', sass.logError))
	.pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
