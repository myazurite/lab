var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');

gulp.task('sass', function(){
    return gulp.src(['scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {baseDir: './'},
        port: 4002
    });

    gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass', 'serve']);