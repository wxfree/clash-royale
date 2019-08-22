const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const pkg = require('../package.json')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'production',
  devServer: {
    port: '3000',
    host: '0.0.0.0',
    hot: true,
    proxy: {
      '/static/*': {
        target: 'http://localhost:8080/',
        secure: false,
        changeOrigin: true,
      },
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(vue|js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      include: /src/,
      enforce: 'pre',
      // options: {
      //   formatter: require('eslint-friendly-formatter'),
      // },
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      // options: {
      //   presets: ['@babel/env']
      // },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
        },
      ],
    },
    {
      test: /\.(sa|sc)ss$/,
      use: [
        // 'vue-style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 8192,
        outputPath: 'images',
        name: '[hash].[ext]',
      },
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[hash:8].css',
    }),
  ],
  resolve: {
    alias: {
      '@/components': '../src/components',
      '@/images': '../static/image',
    },
    extensions: ['.js', '.vue', '.jsx', '.ts'],
  },
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          compress: true,
          parallel: true,
        },
      }),
      new OptimizeCSSAssetsWebpackPlugin(),
    ],
  },
}
