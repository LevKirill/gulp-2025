import gulp from "gulp";
import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

const isBuild = process.argv.includes("build");

gulp.task("html", () => {
  return gulp
    .src(path.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "HTML",
          message: "Помилка: <%= error.message %>",
        })
      )
    )
    .pipe(fileInclude())
    .pipe(
      plugins.if(
        isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: { file: "version.json" },
        })
      )
    )
    .pipe(gulp.dest(path.build.html));
});
