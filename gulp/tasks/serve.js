import gulp from "gulp";
import browserSync from "browser-sync";
import { path } from "../config/path.js";

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: path.buildFolder,
    },
    notify: false,
    port: 3000,
  });
});
