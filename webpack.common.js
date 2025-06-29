const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js", // UPDATE THIS if diff entry point
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/drop-down-menus.html", // UPDATE THIS IF HAVE AN HTML to the html file name
      // title: 'production',  //OR Use this if u want webpack to generate a dynamic html from scratch
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i, // for css and loading images in js (css-loader does this)
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.html$/i, //for images referenced in html
        loader: "html-loader",
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // for images loading images
        type: "asset/resource",
      },
    ],
  },
};
