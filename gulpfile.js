const gulp = require('gulp');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const css2js = require('./src/utils/css2js.js');
const info = require('./src/utils/user.info.js');
const declare = require('./src/utils/declare.js');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('luogu-core', () => {
  return gulp.src('./src/luogu/core/*.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(css2js())
    .pipe(gulp.src('./src/luogu/core/*.js'))
    .pipe(declare())
    .pipe(concat('luogu.user.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(info('./src/luogu/core/_config.yml'))
    .pipe(gulp.dest('dist'));
});

gulp.task('luogu-custom', () => {
  return gulp.src('./src/luogu/custom/custom.js')
    .pipe(rename('luogu-custom.user.js'))
    .pipe(info('./src/luogu/custom/_config.yml'))
    .pipe(gulp.dest('dist'));
});

gulp.task('bzoj', () => {
  return gulp.src('./src/bzoj/*.js')
    .pipe(declare())
    .pipe(concat('bzoj.user.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(info('./src/bzoj/_config.yml'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('luogu-core', 'luogu-custom', 'bzoj'));
