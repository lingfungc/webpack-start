const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // This [name] refers to the "entry" point "bundle"
    // This [contenthash] gives the file a new hash whenever it changes which helps with caching
    filename: "[name][contenthash].js",
    // Clean up the previous hash JavaScript files
    clean: true,
    // Set the assets name as the same as their original ones
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  // Add some options for "webpack-dev-server"
  devServer: {
    // The filepath is for "webpack-dev-server" to serve
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    // Whenever "npm run dev" is executed, open a new tab in browser
    open: true,
    // Enable hot reloading
    hot: true,
    // Enable gzip compression
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      // The ".html" filename in "/dist" when "npm run build" is executed in terminal
      filename: "index.html",
      // This "template" should be the ".html" source code for us to write code, edit and update
      template: "src/template.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
};
