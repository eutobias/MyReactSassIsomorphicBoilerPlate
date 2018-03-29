const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const paths = {
  DIST: path.resolve(__dirname, "dist"),
  PUBLIC: path.resolve(__dirname, "public"),
  SRC: path.resolve(__dirname, "src"),
  CLIENT: path.resolve(__dirname, `src${path.sep}client`)
};

module.exports = {
  devServer: {
    inline: true,
    port: 8888
  },
  entry: path.join(paths.CLIENT, "App.js"),
  output: {
    path: paths.DIST,
    // publicPath: paths.DIST,
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./assets/[name]-[sha512:hash:hex:5].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "./assets/fonts/[name].[ext]",
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        options: {
          removeTags: true,
          removingTags: ['title', 'desc', 'defs', 'style'],
          removeSVGTagAttrs: true,
          removingTagAttrs: ['style', 'version', 'xmlns', 'xmlns:xlink', 'xml:space']
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  resolve: {
    extensions: ["index.js",".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin(`${paths.DIST}`),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
