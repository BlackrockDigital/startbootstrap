// Load plugins
const gulp = require("gulp");

gulp.task('vendor', function(cb) {

  // Bootstrap SCSS
  gulp.src([
      './node_modules/bootstrap/scss/**/*',
    ])
    .pipe(gulp.dest('./assets/bootstrap/scss'))

  cb();

});

gulp.task("default", gulp.parallel("vendor"));
