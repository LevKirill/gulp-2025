import gulp from "gulp";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import avif from "gulp-webp-avif";
import newer from "gulp-newer";
import cheerio from "gulp-cheerio";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";
import fs from "fs";
import nodePath from "path";

gulp.task("images", () => {
  return gulp
    .src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "Images",
          message: "Помилка: <%= error.message %>",
        })
      )
    )
    // Оптимізація jpg/png
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest(path.build.img))
    // WebP
    .pipe(webp())
    .pipe(gulp.dest(path.build.img))
    // AVIF
    .pipe(avif())
    .pipe(gulp.dest(path.build.img));
});

// Автоматична заміна <img> на <picture> у HTML
gulp.task("img-to-picture", () => {
  return gulp
    .src(path.build.html + "**/*.html")
    .pipe(
      cheerio({
        run: ($) => {
          $("img").each(function () {
            const img = $(this);
            const src = img.attr("src");
            if (!src) return;
            const ext = nodePath.extname(src);
            const base = src.replace(ext, "");
            const cls = img.attr("class") || "";
            const alt = img.attr("alt") || "";

            const picture = $("<picture></picture>");
            if (cls) picture.attr("class", cls);

            picture.append(`<source srcset="${base}.avif" type="image/avif">`);
            picture.append(`<source srcset="${base}.webp" type="image/webp">`);

            img.removeAttr("class");
            picture.append(img);
            img.replaceWith(picture);
          });
        },
        parserOptions: { decodeEntities: false },
      })
    )
    .pipe(gulp.dest(path.build.html));
});
