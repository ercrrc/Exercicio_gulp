const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const obfuscate = require('gulp-obfuscate');
const imagemin =require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


exports.default = function() {
    gulp.watch('./source/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}
