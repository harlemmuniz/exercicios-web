const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCss() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({ "uglyComments": false }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('build/assets/fonts'))
}

gulp.task('depsCss', depsCss)
gulp.task('depsFonts', depsFonts)

module.exports = {
    depsCss,
    depsFonts
}