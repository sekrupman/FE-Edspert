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
      filename: 'katalog.html', 
      template: path.resolve(__dirname, './src/katalog.html'),
      chunks: ['katalog']
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: path.resolve(__dirname, './src/product.html'),
      chunks: ['product'] 
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true
  }
};
