const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const writeToDisk = env && Boolean(env.writeToDisk);

  return merge(common, {
    mode: 'development',
    performance: {
      hints: 'warning',
      maxAssetSize: 1048576,
      maxEntrypointSize: 1048576,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '/public/index.html'),
      }),
    ],
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      watchFiles: ['src/**/*'],
      hot: false,
      devMiddleware: {
        writeToDisk: writeToDisk,
      },
    },
  });
};
