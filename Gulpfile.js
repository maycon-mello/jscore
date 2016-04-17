var babel = require('babel-register');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jsdoc = require("gulp-jsdoc");

gulp.task('test', function() {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }));
});


gulp.task('doc', function() {
  return gulp.src('./src/createScore.js')
    .pipe(jsdoc('./documentation'))
});


gulp.task('default', ['test'], function() {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
