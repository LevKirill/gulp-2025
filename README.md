# 🚀 Gulp Starter for Static Websites / Gulp Збірка для статичних сайтів

A modern Gulp build setup for front-end development with SCSS, JavaScript, image optimization (including AVIF & WebP), SVG sprite generation, BrowserSync live reload, and error handling.  
Сучасна збірка Gulp для фронтенд-розробки з підтримкою SCSS, JavaScript, оптимізації зображень (у тому числі AVIF і WebP), генерації SVG-спрайтів, BrowserSync для live reload та зручної обробки помилок.

---

## 🌍 Languages
- [English](#-english)
- [Українська](#-українська)

---

## 🇬🇧 English

### Features
- **SCSS → CSS**
    - Dev mode: with sourcemaps, no media query merging (easy debugging)
    - Build mode: media queries merged, minified CSS

- **JavaScript**
    - Combine libraries + your main JS
    - Minification only for your code
    - Preserves library files to avoid breaking them

- **HTML**
    - Supports includes / partials (`gulp-file-include`)
    - Adds version numbers to CSS/JS for cache busting (`gulp-version-number`)

- **Images**
    - Optimize JPG/PNG
    - Convert to WebP and AVIF
    - Auto replace `<img>` with `<picture>` (preserves classes and alt)

- **Retina support (2x)**
    - If enableRetina is true and a file with @2x exists (e.g., `image@2x.jpg`), the `<picture>` will include 1x and 2x in srcset.
    - If no @2x file exists or enableRetina is false, the image will be inserted normally without 2x.

- **Fonts**
    - Converts `.ttf` → `.woff` + `.woff2`

- **SVG**
    - Auto-generate a single sprite (`sprite.svg`)
    - Detects duplicate SVG names and shows warnings

- **Files**
    - Copies any additional files maintaining folder structure

- **BrowserSync**
    - LiveReload and sync across devices

- **Clean build**
    - `dist/` is cleared automatically before each build

- **Error notifications**
    - All errors shown in console and system notifications (in Ukrainian)

---

### Available commands
```bash
gulp        # Start development (with BrowserSync)
gulp build  # Build project for production
```
---

### Folder structure
```bash
project/
├── gulp/                 # Gulp tasks
│   └── tasks/            # Individual tasks: scss, js, html, images, fonts, svg, files, etc.
├── src/                  # Source files
│   ├── fonts/            # Source fonts (.ttf)
│   ├── img/              # Main images (jpg, png, gif, ico, webp)
│   ├── svg/              # SVG files for sprite generation
│   ├── js/
│   │   ├── libs/         # Libraries (wow.js, swiper.js, etc.)
│   │   └── main.js       # Main JS file
│   ├── scss/             # Styles (SCSS)
│   ├── html/             # HTML partials (include files)
│   ├── files/            # Additional files (PDF, txt, etc.)
│   └── index.html        # Main HTML file
├── dist/                 # Final build (generated automatically)
│   ├── css/              # Compiled CSS
│   ├── js/               # JS files
│   ├── img/              # Optimized images
│   ├── fonts/            # WOFF and WOFF2 fonts
│   └── files/            # Copied additional files
│   └── sprite.svg        # Generated SVG sprite
├── gulpfile.js           # Main Gulp file
├── package.json          # Dependencies
├── README.md             # Documentation
└── yarn.lock             # Yarn lockfile

```

---

### This project structure helps developers quickly understand where everything is located and how to work with the Gulp build:

- **src/ — source files you edit during development.**
    - `img/` — main images (jpg, png, gif, ico, webp)
    - `svg/` — SVG files for generating a single sprite (`sprite.svg`)
    - `js/libs/` — JavaScript libraries (e.g., wow.js, swiper.js)
    - `js/main.js` — your custom JavaScript code
    - `scss/` — SCSS styles
    - `html/` — HTML partials for includes
    - `files/` — additional files (PDF, txt, etc.)
    - `fonts/` — original `.ttf` fonts
- **dist/ — the final build, generated automatically by Gulp.**
    - `css/` — compiled CSS
    - `js/` — JavaScript files (main + libraries)
    - `img/` — optimized images
    - `fonts/` — converted fonts (woff, woff2)
    - `files/` — copied additional files
    - `sprite.svg` — generated SVG sprite
- **gulp/ — Gulp tasks**
- **gulpfile.js — main Gulp configuration file**
- **package.json — project dependencies**
- **yarn.lock — lockfile for Yarn**

This structure ensures clarity, makes adding new files easy, and helps prevent mistakes during development.

---

## 🇺🇦 Українська


### Gulp Збірка для Статичних Сайтів

Це сучасна **Gulp 4 збірка** для статичних сайтів, оптимізована для швидкої розробки та продакшену.  

### Функціонал
- **SCSS → CSS**  
  - Dev: з sourcemaps, без об’єднання медіа-запитів (зручно дебажити)  
  - Build: об’єднання медіа-запитів, мінімізація CSS  

- **JavaScript**  
  - Об’єднання бібліотек + твій main JS 
  - Мінімізація тільки твого коду  
  - Бібліотеки залишаються без змін, щоб нічого не ламалося  

- **HTML**  
  - Підтримка include / partials (`gulp-file-include`)  
  - Додає версію до CSS/JS для уникнення кешу (`gulp-version-number`)  

- **Зображення**  
  - Оптимізація JPG/PNG  
  - Конвертація у WebP та AVIF  
  - Автоматична заміна `<img>` на `<picture>` (класи та alt зберігаються)  

- **Підтримка Retina (2x)**
  - Якщо enableRetina встановлено в true і існує файл з @2x (наприклад, `image@2x.jpg`), у `<picture>` буде додано 1x і 2x у srcset. 
  - Якщо файлу з @2x немає або enableRetina встановлено в false, зображення буде вставлене звичайним способом без 2x.

- **Шрифти**  
  - Конвертує `.ttf` → `.woff` + `.woff2`  

- **SVG**  
  - Генерує один спрайт (`sprite.svg`)  
  - Виявляє дублікати SVG та виводить повідомлення  

- **Файли**  
  - Копіює будь-які додаткові файли зберігаючи структуру  

- **BrowserSync**  
  - LiveReload та синхронізація між пристроями  

- **Очищення збірки**  
  - Папка `dist/` очищається перед кожною збіркою  

- **Помилки та повідомлення**  
  - Всі помилки в консолі та у спливаючих повідомленнях (українською)

---

### Команди
```bash
gulp        # Запуск у режимі розробки (з BrowserSync)
gulp build  # Збірка проєкту для продакшену
```

---

### Структура проєкту
```bash
project/
├── gulp/                 # Папка з Gulp тасками
│   └── tasks/            # Окремі таски: scss, js, html, images, fonts, svg, files тощо
├── src/                  # Вихідні файли для розробки
│   ├── fonts/            # Шрифти у форматі .ttf
│   ├── img/              # Основні зображення: jpg, png, gif, ico, webp
│   ├── svg/              # SVG файли для генерації спрайту sprite.svg
│   ├── js/
│   │   ├── libs/         # JS-бібліотеки (wow.js, swiper.js тощо)
│   │   └── main.js       # Основний JS код вашого сайту
│   ├── scss/             # SCSS файли для стилів
│   ├── html/             # HTML partials (include файли)
│   ├── files/            # Додаткові файли (PDF, txt тощо)
│   └── index.html        # Головний HTML файл сайту
├── dist/                 # Папка для готової збірки (генерується автоматично)
│   ├── css/              # Скомпільовані CSS файли
│   ├── js/               # JS файли (main.js + бібліотеки)
│   ├── img/              # Оптимізовані зображення (jpg, png, webp, gif, ico)
│   ├── fonts/            # Шрифти у форматах WOFF та WOFF2
│   ├── files/            # Скопійовані додаткові файли
│   └── sprite.svg        # Згенерований SVG спрайт
├── gulpfile.js           # Основний Gulp файл, де підключаються всі таски
├── package.json          # Залежності проекту
├── README.md             # Документація (цей файл)
└── yarn.lock             # Файл блокування версій Yarn
```

---

### Ця структура проекту допомагає швидко орієнтуватися, де що лежить, та як працювати із Gulp збіркою:

- **src/ — вихідні файли, які редагуються під час розробки.**
    - `img/` — основні зображення (jpg, png, gif, ico, webp)
    - `svg/` — SVG файли для генерації одного спрайту (`sprite.svg`)
    - `js/libs/` — JavaScript бібліотеки (наприклад, wow.js, swiper.js)
    - `js/main.js` — ваш власний JS код
    - `scss/` — стилі у SCSS
    - `html/` — HTML partials для include файлів
    - `files/` — додаткові файли (PDF, txt тощо)
    - `fonts/` — вихідні шрифти у форматі `.ttf`
- **dist/ — готова збірка, створюється автоматично Gulp.**
    - `css/` — скомпільовані CSS файли
    - `js/` — JS файли (main + бібліотеки)
    - `img/` — оптимізовані зображення
    - `fonts/` — конвертовані шрифти (woff, woff2)
    - `files/` — скопійовані додаткові файли
    - `sprite.svg` — згенерований SVG спрайт
- **gulp/ — папка з Gulp тасками**
- **gulpfile.js — основний файл конфігурації Gulp**
- **package.json — залежності проекту**
- **yarn.lock — lockfile для Yarn**

Ця структура забезпечує зрозумілість, спрощує додавання нових файлів та допомагає уникнути помилок під час розробки.
