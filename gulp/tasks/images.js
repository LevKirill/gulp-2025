// 📁 gulp/tasks/images.js
import gulp from "gulp";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";
import avif from "gulp-webp-avif";
import newer from "gulp-newer";
import cheerio from "gulp-cheerio";
import fs from "fs";
import nodePath from "path";
import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

const enableRetina = true; // true — включено retina, false — відключено

// 🖼 Оптимізація та конвертація зображень
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
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(webp())
    .pipe(gulp.dest(path.build.img))
    .pipe(avif())
    .pipe(gulp.dest(path.build.img));
});

// 🔄 Автоматична заміна <img> на <picture> з підтримкою retina та перевіркою регістру
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

            const ext = nodePath.extname(src); // .jpg або .png
            const base = src.replace(ext, "");
            const retinaPath = base + "@2x" + ext;

            // Переводимо назви файлів у нижній регістр для перевірки
            const buildImgFolder = path.build.img;
            const filesInFolder = fs.readdirSync(buildImgFolder);
            const filesLowerCase = filesInFolder.map(f => f.toLowerCase());
            const hasRetina = enableRetina && filesLowerCase.includes(nodePath.basename(retinaPath).toLowerCase());

            // Попередження, якщо файл на диску містить верхній регістр
            const problematicFiles = filesInFolder.filter(f => f !== f.toLowerCase());
            if (problematicFiles.length) {
              console.warn("⚠️ Зверніть увагу: деякі файли містять верхній регістр:");
              problematicFiles.forEach(f => {
                console.warn("   ", nodePath.join(buildImgFolder, f));
              });
            }

            const cls = img.attr("class") || "";
            const alt = img.attr("alt") || "";

            const picture = $("<picture></picture>");
            if (cls) picture.attr("class", cls);

            if (enableRetina && hasRetina) {
              picture.append(`<source srcset="${base}.avif 1x, ${base}@2x.avif 2x" type="image/avif">`);
              picture.append(`<source srcset="${base}.webp 1x, ${base}@2x.webp 2x" type="image/webp">`);
              img.attr("srcset", `${base}${ext} 1x, ${base}@2x${ext} 2x`);
            } else {
              picture.append(`<source srcset="${base}.avif" type="image/avif">`);
              picture.append(`<source srcset="${base}.webp" type="image/webp">`);
              img.removeAttr("srcset");
            }

            picture.append(img);
            img.removeAttr("class");
            img.replaceWith(picture);
          });
        },
        parserOptions: { decodeEntities: false },
      })
    )
    .pipe(gulp.dest(path.build.html));
});
