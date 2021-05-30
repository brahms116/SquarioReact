const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    filename: "index.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
  experiments: {
    syncWebAssembly: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/,
      },
      { test: /\.svg$/, type: "asset/inline" },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
