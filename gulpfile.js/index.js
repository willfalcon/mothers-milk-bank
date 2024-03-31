const livereload = require('gulp-livereload');
const { copyNormalize } = require('./copyNormalize');
const { watch, parallel, src } = require('gulp');
const { jsScript } = require('./scripts');
const { styleScript } = require('./styles');
const developBlock = require('./developBlock');
const buildBlocks = require('./buildBlocks');
const developBlocks = require('./developBlocks');

function refresh(cb) {
  return src('index.php').pipe(livereload());
}

function watchTask(cb) {
  copyNormalize();
  livereload.listen();
  watch(['src/styles/**/*.scss'], () => styleScript('src/styles/styles.scss', 'dist/', true));
  // watch(['blocks/**/*.scss'], devBlockStyles);
  watch(['src/scripts/**/*.js'], () => jsScript('src/scripts/index.js', 'dist/', true));
  // watch(['blocks/**/*.js'], blockScripts);
  watch(['**/*.php'], refresh);
  cb();
  developBlocks();
}

async function build() {
  await copyNormalize(true);
  await styleScript('src/styles/styles.scss', 'dist/');
  await jsScript('src/scripts/index.js', 'dist/');
}

exports.watch = watchTask;
exports.developBlock = developBlock;
exports.buildBlocks = buildBlocks;
exports.default = build;
exports.developBlocks = developBlocks;
