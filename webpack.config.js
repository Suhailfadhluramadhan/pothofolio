module.exports = {
  // config lainnya ...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
        exclude: [/node_modules\/react-parallax-tilt/],
      },
    ],
  },
};
