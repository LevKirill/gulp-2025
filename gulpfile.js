import gulp from "gulp";

// Підключаємо всі таски
import "./gulp/tasks/watcher.js";
import "./gulp/tasks/scss.js";
import "./gulp/tasks/js.js";
import "./gulp/tasks/html.js";
import "./gulp/tasks/images.js";
import "./gulp/tasks/fonts.js";
import "./gulp/tasks/svg.js";
import "./gulp/tasks/files.js";
import "./gulp/tasks/serve.js";
import "./gulp/tasks/clean.js";

// DEV-збірка
gulp.task(
  "dev",
  gulp.series(
    "clean",
    gulp.parallel("scss", "js", "html", "images", "fonts", "svg", "files"),
    gulp.parallel("watcher", "serve")
  )
);

// BUILD-збірка
gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("scss", "js", "html", "images", "fonts", "svg", "files")
  )
);

// Дефолтна задача
gulp.task("default", gulp.series("dev"));
