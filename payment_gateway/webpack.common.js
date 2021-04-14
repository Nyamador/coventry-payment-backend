const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: './frontend/index.js',
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // Order Of Loaders are important
          "style-loader",
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets : ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    // new WorkboxPlugin.GenerateSW({
    //   swSrc: "./frontend/sw.js",
    //   swDest: "./pages/templates/pages/serviceworker.js", //This is the view we wrote above that serves it.
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
}