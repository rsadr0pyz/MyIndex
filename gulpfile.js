const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const uglifyCSS = require('gulp-uglifycss')

const compileSASS = async() => {
    console.log("Compiling and compacting sass files")
    gulp.src("distribution/src/scss/*.scss")
        .pipe(sass())
        .pipe(uglifyCSS())
        .pipe(gulp.dest("distribution/public/css"))
}

const compileJS = async() => {
    console.log("Compacting js files")
    gulp.src("distribution/src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("distribution/public/js"))
}

gulp.task('compile-sass', compileSASS)

gulp.task('compile-js', compileJS)

gulp.task('compile-all', async() => {
    compileSASS()
    compileJS()
})