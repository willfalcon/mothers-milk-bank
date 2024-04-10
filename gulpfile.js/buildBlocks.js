const argv = require('yargs').argv;
const { readdir } = require('fs/promises');
const fs = require('fs');
const { styleScript } = require('./styles');
const { jsScript } = require('./scripts');

module.exports = async function buildBlocks() {
  const blocks = await readdir('blocks/');
  const exclude = ['blocks.php', '_block-imports.scss', '.DS_Store'];
  const blockNames = blocks.filter(block => !exclude.includes(block));

  const externalSources = ['node_modules/swiper/swiper-bundle.css'];

  styleScript(externalSources, './dist', true);
  styleScript(externalSources, './dist');

  await Promise.all(
    blockNames.map(async block => {
      const styleSource = `blocks/${block}/${block}.scss`;
      const editorStyleSource = `blocks/${block}/${block}-editor.scss`;
      const styleDest = `./dist/${block}`;
      const scriptSource = `blocks/${block}/${block}.js`;
      const editorScriptSource = `blocks/${block}/${block}-editor.js`;
      await fs.access(styleSource, async err => {
        if (err) {
          // console.log('no default styles');
          return;
        } else {
          console.log(`building ${block} styles`);
          await styleScript(styleSource, styleDest, true);
          await styleScript(styleSource, styleDest);
        }
      });
      await fs.access(editorStyleSource, async err => {
        if (err) {
          // console.log('no editor styles');
          return;
        } else {
          console.log(`building ${block} editor styles`);
          await styleScript(editorStyleSource, styleDest, true);
          await styleScript(editorStyleSource, styleDest);
        }
      });
      await fs.access(scriptSource, async err => {
        if (err) {
          // console.log('no default script');
          return;
        } else {
          console.log(`building ${block} script`);
          await jsScript(scriptSource, `dist/${block}/`, true);
          await jsScript(scriptSource, `dist/${block}/`);
        }
      });
      await fs.access(editorScriptSource, async err => {
        if (err) {
          // console.log('no editor script');
          return;
        } else {
          console.log(`building ${block} editor script`);
          await jsScript(editorScriptSource, `dist/${block}/`, true);
          await jsScript(editorScriptSource, `dist/${block}/`);
        }
      });
    })
  );
};
