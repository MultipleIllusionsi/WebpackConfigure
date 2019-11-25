module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            fallback: require.resolve("file-loader")
          }
          // options: {
          //   name: "[name].[hash].[ext]",
          //   outputPath: "imgs"
          // }
        }
      }
    ]
  }
};
