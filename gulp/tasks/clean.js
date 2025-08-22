import { path } from "../config/path.js";
import { deleteAsync } from "del";
import gulp from "gulp";

gulp.task("clean", () => {
  return deleteAsync(path.clean);
});
