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

const bundleStyles = async () => {
  await styleScript('src/styles/styles.scss', 'dist/', true);
  await styleScript('src/styles/editor-styles.scss', 'dist/', true);
};

function watchTask(cb) {
  copyNormalize();
  livereload.listen();
  watch(['src/styles/**/*.scss'], bundleStyles);
  // watch(['blocks/**/*.scss'], devBlockStyles);
  watch(['src/scripts/**/*.js'], () => jsScript(['src/scripts/index.js', 'src/scripts/editor.js'], 'dist/', true));
  // watch(['blocks/**/*.js'], blockScripts);
  watch(['**/*.php'], refresh);
  cb();
  developBlocks();
}

async function buildThemeStyles() {
  await copyNormalize(true);
  await copyNormalize();
  await styleScript('src/styles/styles.scss', 'dist/', true);
  await styleScript('src/styles/styles.scss', 'dist/');
  await styleScript('src/styles/editor-styles.scss', 'dist/', true);
  await styleScript('src/styles/editor-styles.scss', 'dist/');
}

async function buildThemeScripts() {
  await jsScript('src/scripts/index.js', 'dist/', true);
  await jsScript('src/scripts/index.js', 'dist/');
}

async function build() {
  await buildThemeStyles();
  await buildThemeScripts();
}

exports.watch = watchTask;
exports.developBlock = developBlock;
exports.buildBlocks = buildBlocks;
exports.default = parallel(build, buildBlocks);
exports.developBlocks = developBlocks;
exports.buildThemeStyles = buildThemeStyles;
exports.buildThemeScripts = buildThemeScripts;
