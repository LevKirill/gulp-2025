import gulp from "gulp";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

gulp.task("fonts", () => {
  return gulp
    .src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.build.fonts))
    .pipe(gulp.src(path.src.fonts))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.build.fonts));
});
