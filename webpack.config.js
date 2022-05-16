module.exports = {
  mode: "production",
  entry: "./src/index.js",
  cache: false,
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
    ],
  },
  watch: true,
};
