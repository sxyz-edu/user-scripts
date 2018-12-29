const gulp = require('gulp');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const css2js = require('./css2js.js');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('luogu', () => {
  return gulp.src('luogu.user.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(css2js('luogu.user.js'))
    .pipe(rename('luogu.user.js'))
    .pipe(gulp.dest('dist'));
})
