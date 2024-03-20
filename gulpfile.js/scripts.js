const { src, dest } = require('gulp');
const named = require('vinyl-named');
const webpack = require('webpack-stream');
const compiler = require('webpack');
const livereload = require('gulp-livereload');
const scriptSrces = [
  'src/scripts/index.js',
  // 'src/scripts/editor.js',
  // 'src/scripts/contact-block/contact-block-editor.js',
  // 'src/scripts/contact-block/contact-block-options-page.js',
];

exports.jsScript = function jsScript(scrFile, destFile, dev = false) {
  const srcArray = scrFile.constructor === Array ? scrFile : [scrFile];

  return src(srcArray)
    .pipe(named())
    .pipe(
      webpack(
        {
          devtool: dev ? 'eval-cheap-module-source-map' : 'source-map',
          mode: dev ? 'development' : 'production',
          output: {
            filename: dev ? '[name].js' : '[name].min.js',
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
                exclude: /node_modules/,
              },
            ],
          },
        },
        compiler
      )
    )
    .pipe(dest(destFile))
    .pipe(livereload());
};
