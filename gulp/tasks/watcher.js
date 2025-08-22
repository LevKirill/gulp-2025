import gulp from "gulp";
import { path } from "../config/path.js";

gulp.task("watcher", () => {
  gulp.watch(path.watch.html, gulp.series("html", "img-to-picture")).on("change", browserSync.reload);
  gulp.watch(path.watch.scss, gulp.series("scss")).on("change", browserSync.reload);
  gulp.watch(path.watch.js, gulp.series("js")).on("change", browserSync.reload);
  gulp.watch(path.watch.img, gulp.series("images", "img-to-picture")).on("change", browserSync.reload);
  gulp.watch(path.watch.svg, gulp.series("svg")).on("change", browserSync.reload);
  gulp.watch(path.watch.fonts, gulp.series("fonts")).on("change", browserSync.reload);
  gulp.watch(path.watch.files, gulp.series("files")).on("change", browserSync.reload);
});
