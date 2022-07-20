const path = require("path");
const webpack = require('webpack')
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const opt = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/components/HelloWorld.js",
  // experiments: {
  //   outputModule: true,
  // },
  externals: {
    'vue': "Vue"
  },
  output: {
    libraryTarget: 'umd',
    // library: {
    //   name: "library",
    //   type: "var",
    // },
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
  ],
};
const compiler = webpack(opt)
compiler.run((err, stat) => {
    console.log('stat', stat.toString())
})