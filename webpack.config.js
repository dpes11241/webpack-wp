const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    watch: true,
    entry: {
        app: ['./src/app.scss']
      },
      plugins: [new MiniCssExtractPlugin({
        filename: "[name].css",
      })],
      module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          },
        ],
      },
  };
