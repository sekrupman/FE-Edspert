const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
  entry: {
    katalog: './src/katalog.js',
    product: './src/product.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
      filename: 'katalog.html',
      template: './src/katalog.html',
      chunks: ['katalog']
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html',
      chunks: ['product']
    })
  ],
  devServer: {
    contentBase: './dist'
  }
};
