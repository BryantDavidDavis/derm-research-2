'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
	gulp.src('src/app.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
		cascade: false
	}))
	.pipe(gulp.dest('dist'))
	);

gulp.task('sass', function () {
	return gulp.src('./node_modules/foundation-sites/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
		cascade: false
	}))
	.pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./node_modules/foundation-sites/scss/**/*.scss', ['sass']);
});