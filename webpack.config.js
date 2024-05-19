const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/katalog.js' // Change entry point to katalog.js
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // Change filename to index.html
      template: path.resolve(__dirname, './src/katalog.html'),
      chunks: ['index'] // Change chunks to index
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  }
};
