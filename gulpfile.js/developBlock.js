const argv = require('yargs').argv;

const { watch, src } = require('gulp');
const livereload = require('gulp-livereload');
const { styleScript } = require('./styles');
const { jsScript } = require('./scripts');

function refresh() {
  return src('index.php').pipe(livereload());
}

exports.developBlock = function developBlock() {
  if (!argv.block) {
    console.log('Must set option --block');
    return src('index.php');
  }

  const block = argv.block;
  console.log(block);

  const externalSources = ['node_modules/swiper/swiper-bundle.css'];
  styleScript(externalSources, './dist', true);

  const styleSource = `blocks/${block}/${block}.scss`;
  const styleWatch = [`blocks/${block}/**/*.scss`, `!blocks/${block}/**/*-editor.scss`];
  const editorStyleWatch = `blocks/${block}/**/*-editor.scss`;
  const editorStyleSource = `blocks/${block}/${block}-editor.scss`;
  const styleDest = `./dist/${block}`;
  const scriptSource = argv.block ? `blocks/${argv.block}/${argv.block}.js` : 'blocks/**/*.js';
  const scriptWatch = argv.block ? `blocks/${argv.block}/**/*.js` : 'blocks/**/*.js';
  const editorScriptSource = argv.block ? `blocks/${argv.block}/${argv.block}-editor.js` : 'blocks/**/*.js';
  const editorScriptWatch = argv.block ? `blocks/${argv.block}/**/*-editor.js` : 'blocks/**/*.js';

  livereload.listen();

  watch(styleWatch, () => styleScript(styleSource, styleDest, true));
  watch(editorStyleWatch, () => styleScript(editorStyleSource, styleDest, true));
  watch('src/styles/editor-styles.scss', () => styleScript('src/styles/editor-styles.scss', 'dist/', true));
  watch(scriptWatch, () => jsScript(scriptSource, `dist/${block}/`, true));
  watch(editorScriptWatch, () => jsScript(editorScriptSource, `dist/${block}/`, true));
  watch(['**/*.php|json'], refresh);
};
