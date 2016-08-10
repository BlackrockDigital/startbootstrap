// Assigning modules to local variables
var gulp = require('gulp');

// Copy Bootstrap core files from node_modules to vendor directory
gulp.task('default', function() {
    return gulp.src(['node_modules/bootstrap-sass/assets/stylesheets/**/*'])
        .pipe(gulp.dest('vendor/bootstrap-sass'))
})