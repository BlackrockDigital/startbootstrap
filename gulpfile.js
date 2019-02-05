const {
  src,
  dest
} = require('gulp');

function defaultTask(cb) {
  // return src('node_modules/bootstrap/**/*')
  //   .pipe(dest('vendor'));
  cb();
}

exports.default = defaultTask
