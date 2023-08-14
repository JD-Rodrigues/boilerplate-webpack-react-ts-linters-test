/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { EnvironmentPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.MODE === 'DEV'
const isProduction = process.env.MODE === 'PROD'

module.exports = {
  mode: 'production',
  entry: './src/main/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            parseMap: true,
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              target: 'es2021',
              minify: { compress: isProduction },
              transform: {
                react: {
                  runtime: 'automatic',
                  refresh: isDevelopment
                }
              }
            },
            minify: true
          }
        }
      }
    ]
  },
  devServer: {
    static: ['dist']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/index.html'
    }),
    new EnvironmentPlugin({ ...process.env }),
    new MiniCssExtractPlugin()
  ]
}
