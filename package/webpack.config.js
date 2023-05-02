var path = require("path");

module.exports = {
  entry: "./ReactRibbons.js",
  output: {
    path: path.join(__dirname),
    filename: "index.js",
    library: "react-ribbons",
    libraryTarget: "umd",
    publicPath: "/",
    umdNamedDefine: true
  },
  resolve: {
    alias: {
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
      "prop-types": path.resolve(__dirname, "./node_modules/prop-types"),
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "props-types": {
      commonjs: "props-types",
      commonjs2: "props-types",
      amd: "PropsTypes",
      root: "PropsTypes"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64]"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
