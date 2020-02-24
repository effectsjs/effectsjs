const path = require('path')
module.exports = {
  entry: './effectsjs/effects-runtime.js',
  mode: process.env.NODE_ENV || 'production',
  output: {
    path: path.resolve(__dirname, 'effectsjs'),
    filename: 'effects-runtime.bundle.js',
    library: 'effectsRuntime',
  },
  module: {
    rules: {
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
  }
};
