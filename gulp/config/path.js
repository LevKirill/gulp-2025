import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
    svg: `${buildFolder}/img/`,
  },
  src: {
    html: `${srcFolder}/html/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/main.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    svg: `${srcFolder}/svg/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.ttf`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/html/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
    svg: `${srcFolder}/svg/**/*.svg`,
    fonts: `${srcFolder}/fonts/*.ttf`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  rootFolder
};
