import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

const sass = gulpSass(dartSass);

const isDev = process.argv.includes("dev");
const isBuild = process.argv.includes("build");

gulp.task("scss", () => {
  return gulp
    .src(path.src.scss, { sourcemaps: isDev })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "SCSS",
          message: "Помилка: <%= error.message %>",
        })
      )
    )
    .pipe(sass())
    .pipe(plugins.if(isBuild, groupCssMediaQueries()))
    .pipe(
      plugins.if(
        isBuild,
        autoprefixer({ grid: true, overrideBrowserslist: ["last 3 versions"] })
      )
    )
    .pipe(plugins.if(isBuild, cleanCss()))
    .pipe(gulp.dest(path.build.css, { sourcemaps: "." }));
});
