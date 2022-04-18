const CracoLessPlugin = require("craco-less");
const webpack = require('webpack');


module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          fs:false,
          path: require.resolve("path-browserify"),
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify"),
          buffer: require.resolve("buffer"),
          os: require.resolve('os-browserify/browser'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
             Buffer: ['buffer', 'Buffer'],
             process: 'process/browser',
        }),
    ],
    },
  },
};

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }]
}