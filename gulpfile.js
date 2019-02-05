// Assigning modules to local variables
var gulp = require('gulp');

// Copy Bootstrap core files from node_modules to vendor directory
gulp.task('default', function() {

  gulp.src(['node_modules/bootstrap/dist/js/*.js'])
    .pipe(gulp.dest('assets/vendor/bootstrap/js'))

  gulp.src(['node_modules/bootstrap/scss/**/*'])
    .pipe(gulp.dest('assets/vendor/bootstrap/scss'))

  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('assets/vendor/jquery'))

  gulp.src(['node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/popper.js/dist/umd/popper.min.js.map'])
    .pipe(gulp.dest('assets/vendor/popper'))

})
