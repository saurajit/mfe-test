const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000, // Change to 3001 for header-app
    open: true,
    hot: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
        "React": "react",
    }),
    new ModuleFederationPlugin({
      name: "host_app",
      remotes: {
        header_app: "header_app@http://localhost:3001/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    })
  ],
};
