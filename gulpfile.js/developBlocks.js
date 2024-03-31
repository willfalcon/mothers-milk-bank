const { readdir } = require('fs/promises');

const argv = require('yargs').argv;
const { watch, src } = require('gulp');
const livereload = require('gulp-livereload');
const { styleScript } = require('./styles');
const { jsScript } = require('./scripts');

function refresh() {
  return src('index.php').pipe(livereload());
}

module.exports = async function developBlocks() {
  const externalSources = ['node_modules/swiper/swiper-bundle.css'];
  styleScript(externalSources, './dist', true);

  const blocks = await readdir('blocks/');
  const exclude = ['blocks.php', '_block-import.scss', '.DS_Store'];
  const blockNames = blocks.filter(block => !exclude.includes(block));

  livereload.listen();

  blockNames.forEach(block => {
    const styleSource = `blocks/${block}/${block}.scss`;
    const styleWatch = [`blocks/${block}/**/*.scss`, `!blocks/${block}/**/*-editor.scss`];
    const editorStyleWatch = `blocks/${block}/**/*-editor.scss`;
    const editorStyleSource = `blocks/${block}/${block}-editor.scss`;
    const styleDest = `./dist/${block}`;
    const scriptSource = argv.block ? `blocks/${argv.block}/${argv.block}.js` : 'blocks/**/*.js';
    const scriptWatch = argv.block ? `blocks/${argv.block}/**/*.js` : 'blocks/**/*.js';
    const editorScriptSource = argv.block ? `blocks/${argv.block}/${argv.block}-editor.js` : 'blocks/**/*.js';
    const editorScriptWatch = argv.block ? `blocks/${argv.block}/**/*-editor.js` : 'blocks/**/*.js';

    watch(styleWatch, () => styleScript(styleSource, styleDest, true));
    watch(editorStyleWatch, () => styleScript(editorStyleSource, styleDest, true));
    watch('src/styles/editor-styles.scss', () => styleScript('src/styles/editor-styles.scss', 'dist/', true));
    watch(scriptWatch, () => jsScript(scriptSource, `dist/${block}/`, true));
    watch(editorScriptWatch, () => jsScript(editorScriptSource, `dist/${block}/`, true));
  });

  watch(['**/*.php|json'], refresh);
};
