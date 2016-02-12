'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const vinylSource = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const babel = require('gulp-babel');

const source = './futar.js';
const target = './dist';

gulp.task('build', function () {
  return browserify(source)
    .bundle()
    .pipe(vinylSource(source))
    .pipe(vinylBuffer())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(target));
});

