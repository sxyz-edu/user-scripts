const gulp = require('gulp');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const css2js = require('./src/utils/css2js.js');
const info = require('./src/utils/user.info.js');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('luogu-core', () => {
  return gulp.src('./src/luogu/core/*.css')
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(css2js())
    .pipe(gulp.src('./src/luogu/core/*.js'))
    .pipe(concat('luogu.user.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(info({
      'name': 'Scripts for Luogu',
      'version': '0.2.1',
      'namespace': 'https://www.luogu.org/',
      'match': [
        'https://www.luogu.org/*',
        'https://www.luogu.com.cn/*'
      ],
      'exclude': [
        'https://www.luogu.org/blog/*',
        'https://www.luogu.com.cn/blog/*'
      ],
      'run-at': 'document-start',
      'updateURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js',
      'downloadURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu.user.js',
      'supportURL': 'https://github.com/sxyz-edu/user-scripts'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('luogu-custom', () => {
  return gulp.src('./src/luogu/custom/custom.js')
    .pipe(rename('luogu-custom.user.js'))
    .pipe(info({
      'name': 'Luogu Config',
      'version': '0.1.1',
      'namespace': 'https://www.luogu.org/',
      'match': [
        'https://www.luogu.org/*',
        'https://www.luogu.com.cn/*'
      ],
      'run-at': 'document-start',
      'updateURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu-custom.user.js',
      'downloadURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/luogu-custom.user.js',
      'supportURL': 'https://github.com/sxyz-edu/user-scripts'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('bzoj', () => {
  return gulp.src('./src/bzoj/*.js')
    .pipe(concat('bzoj.user.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(info({
      'name': 'Scripts for BZOJ',
      'namespace': 'https://www.lydsy.com/',
      'version': '0.1.1',
      'match': [
        'https://www.lydsy.com/JudgeOnline/problem.php?id=*',
        'https://www.lydsy.com/JudgeOnline/show.php?id=*'
      ],
      'updateURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js',
      'downloadURL': 'https://raw.githubusercontent.com/sxyz-edu/user-scripts/master/dist/bzoj.user.js',
      'supportURL': 'https://github.com/sxyz-edu/user-scripts'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('luogu-core', 'luogu-custom', 'bzoj'));
