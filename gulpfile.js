// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require("gulp");
// Importing all the Gulp-related packages we want to use
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const replace = require("gulp-replace");
const browserSync = require("browser-sync");
const svgo = require("gulp-svgo");
const svgstore = require("gulp-svgstore");

const server = browserSync.create();

// File paths
const files = {
  indexPath: "app/*.html",
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(dest("docs")); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src([
    files.jsPath,
    //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
  ])
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(dest("docs"));
}

// Cachebust
function cacheBustTask() {
  var cbString = new Date().getTime();
  return src(["./dist/*.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("docs"));
}

// Copy Images task: copies images folder to dist
function copyImagesTask() {
  return src(["app/images/**/*"]).pipe(dest("docs/images"));
}

// Copy Icons task: optimize icons folder to dist
function copyIconsTask() {
  return src(["app/icons/**/*"]).pipe(svgo()).pipe(dest("app/icons"));
}

// Create svg sprite
function iconSpriteTask() {
  return src("app/icons/*.svg").pipe(svgstore()).pipe(dest("docs"));
}

// Copy Index task: copies index file to dist
function copyIndexTask() {
  return src(["app/*.html"]).pipe(dest("docs"));
}

// Browser-sync local server
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./docs",
    },
  });
  done();
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch(
    [files.indexPath, files.scssPath, files.jsPath],
    { interval: 1000, usePolling: true }, //Makes docker work
    series(
      parallel(scssTask, jsTask),
      copyImagesTask,
      copyIconsTask,
      iconSpriteTask,
      copyIndexTask,
      cacheBustTask,
      reload
    )
  );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  parallel(scssTask, jsTask),
  copyImagesTask,
  copyIconsTask,
  iconSpriteTask,
  copyIndexTask,
  cacheBustTask,
  serve,
  watchTask
);
