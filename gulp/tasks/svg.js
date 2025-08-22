import gulp from "gulp";
import svgSprite from "gulp-svg-sprite";
import fs from "fs";
import nodePath from "path";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

gulp.task("svg", () => {
  const names = {};
  const files = fs.readdirSync("./src/svg", { withFileTypes: true });

  function checkDuplicates(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    items.forEach((item) => {
      const fullPath = nodePath.join(dir, item.name);
      if (item.isDirectory()) {
        checkDuplicates(fullPath);
      } else if (item.isFile() && item.name.endsWith(".svg")) {
        if (names[item.name]) {
          console.error(
            `❌ У вас дублікати SVG: "${item.name}"\n → ${names[item.name]}\n → ${fullPath}`
          );
          plugins.notify({
            title: "SVG",
            message: `Знайдено дублікати SVG: "${item.name}"`,
          }).write("");
        } else {
          names[item.name] = fullPath;
        }
      }
    });
  }

  checkDuplicates("./src/svg");

  return gulp
    .src(path.src.svg)
    .pipe(svgSprite({ mode: { stack: { sprite: "../sprite.svg" } } }))
    .pipe(gulp.dest(path.build.img));
});
