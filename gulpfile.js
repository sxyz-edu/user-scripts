const gulp = require("gulp");
const path = require("path");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");
const info = require("./user.info.js");
const webpackConfig = require("./webpack.config.js");

const generateUserScript = dirname => () => {
  return gulp
    .src(path.join(dirname, "index.ts"))
    .pipe(webpack(webpackConfig))
    .pipe(info(path.join(dirname, "_config.yml")))
    .pipe(rename(path.basename(dirname) + ".user.js"))
    .pipe(gulp.dest("dist"));
};

gulp.task("luogu", generateUserScript("./src/luogu"));
gulp.task("bzoj", generateUserScript("./src/bzoj"));

gulp.task("default", gulp.series("luogu", "bzoj"));
