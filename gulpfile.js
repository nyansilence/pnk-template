const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpImage = require('gulp-image');
const concat = require('gulp-concat');
const ejs = require("gulp-ejs");
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function ejsBuild() {
    return gulp.src('html/*.ejs')
    .pipe(ejs({ title: 'gulp-ejs' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
    .pipe(gulp.dest('dist/'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch('./sass/**/*.scss',style);
    gulp.watch('./html/**/*.ejs').on('change', browserSync.reload);
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    gulp.watch('./html/**/*.ejs', gulp.series(['ejsBuild']));
}

function style() {
    return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
}

function script() {
    return gulp.src(['js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
}

function image() {
    return gulp.src('img/**/*')
    .pipe(gulpImage())
    .pipe(gulp.dest('dist/img'))
}

function defaultTask() {
    watch();
}
  
function build() {
    style();
    script();
    image();
    ejsBuild();
}

exports.default = defaultTask;
exports.image = image;
exports.script = script;
exports.build = build;
exports.style = style;
exports.ejsBuild = ejsBuild;
exports.watch = watch;
