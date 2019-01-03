const gulp = require('gulp');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const css2js = require('./src/utils/css2js.js');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('luogu', () => {
  return gulp.src('./src/luogu/luogu.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(css2js('./src/luogu/luogu.js'))
    .pipe(rename('luogu.user.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('luogu-custom', () => {
  return gulp.src('./src/luogu/custom.js')
    .pipe(rename('luogu-custom.user.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bzoj', () => {
  return gulp.src('./src/bzoj/bzoj.js')
    .pipe(rename('bzoj.user.js'))
    .pipe(gulp.dest('dist'));
})

gulp.task('default', gulp.parallel('luogu', 'luogu-custom', 'bzoj'));
