'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('src/tsconfig.json');

gulp.task('copy', function() {
  gulp.src(['src/images/**/*']).pipe(gulp.dest('app/images'));
});

gulp.task('build', ['copy'], function() {
  var tsResult = tsProject.src().pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('app'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('**/*.ts', ['build']);
  gulp.watch('**/*.tsx', ['build']);
});

gulp.task('default', ['build']);
