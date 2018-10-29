const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => ({
  entry: "./index.tsx",
  mode: env.production ? "production" : "development",
  output: {
    filename: "ui.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    hot: false,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
});
