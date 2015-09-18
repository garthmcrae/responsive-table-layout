'use strict';
 
var gulp = require('gulp');

gulp.task('fonts', function() {
	gulp.src('./src/icons/fonts/**/*.{ttf,woff,eof,svg}')
	.pipe(gulp.dest('./public/fonts'));
});
