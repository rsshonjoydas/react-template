const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildsStyles() {
  return src('./src/styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['./src/**/*.tsx'] }))
    .pipe(dest('./src/styles/css'))
}

function watchTask() {
  watch(['./src/styles/sass/**/*.scss', '*.tsx'], buildsStyles)
}

exports.default = series(buildsStyles, watchTask)