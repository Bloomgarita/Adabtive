const { NxAppRspackPlugin } = require('@nx/rspack/app-plugin');
const { NxReactRspackPlugin } = require('@nx/rspack/react-plugin');
const { join } = require('path');

const isProduction = process.env['NODE_ENV'] === 'production';

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
    // Explicitly set publicPath for production builds
    publicPath: isProduction ? '/Adabtive/' : '/',
  },
  devServer: {
    port: 4200,
    // Explicitly serve static files from the public directory
    static: {
      directory: join(__dirname, 'public'), // Correct path to public directory
    },
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxAppRspackPlugin({
      tsConfig: './tsconfig.app.json',
      main: './src/main.tsx',
      index: './src/index.html',
      // Set baseHref for GitHub Pages deployment (still useful for some scenarios)
      baseHref: isProduction ? '/Adabtive/' : '/',
      assets: [], // Keep favicon, remove assets dir as images moved to public
      styles: [],
      outputHashing: isProduction ? 'all' : 'none',
      optimization: isProduction,
    }),
    new NxReactRspackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],
};
