const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-transform-react-jsx"
              ],
            },
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  target: ["web", "es5"],
  plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
}