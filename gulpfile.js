let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let cssMin = require('gulp-css');

gulp.task('css', () => {
    gulp.src([
        './css/fawesome.css',
        './css/bootstrap.css',
        './css/mine.css'
    ])
        .pipe(concat('app.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./output'));
});

gulp.task('script', () => {
    gulp.src([
        './js/jquery.js',
        './js/popper.js',
        './js/bootstrap.js',
        './js/bootstrap-datepicker.js',
        './js/ips.js',
        './js/mine.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./output'))
});

gulp.task('default', ['css', 'script']);