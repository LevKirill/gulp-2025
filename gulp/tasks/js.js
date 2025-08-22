import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

const isDev = process.argv.includes("dev");
const isBuild = process.argv.includes("build");

gulp.task("js", () => {
  return gulp
    .src([`${path.srcFolder}/js/libs/*.js`, path.src.js])
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "JS",
          message: "Помилка: <%= error.message %>",
        })
      )
    )
    .pipe(concat("main.min.js"))
    .pipe(plugins.if(isBuild, uglify()))
    .pipe(gulp.dest(path.build.js));
});
