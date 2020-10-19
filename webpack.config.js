const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = [{
  name: 'client',
  entry: path.resolve(__dirname, './src/server/server.js'),
  output: {
    path: path.resolve(__dirname, 'build/client'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.join(__dirname, 'src/client'),
    proxy: {
      '/resource' : 'http://localhost:3000/resource',
      hot: true
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
},     
{
  name: 'server',
  entry: path.resolve(__dirname, './src/server/server.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
      path: path.resolve(__dirname + 'build/server/'),
      filename: 'bundle.js',
  },
}]