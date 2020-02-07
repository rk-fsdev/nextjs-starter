const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withCss = require("@zeit/next-css");
const withOptimizedImages = require("next-optimized-images");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const nextConfig = {
  cssLoaderOptions: {
    importLoaders: 1
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: "url-loader?limit=1000000"
    });
    return config;
  },
  target: "serverless"
};

module.exports = withPlugins(
  [
    withSass,
    withImages,
    withCss,
    [
      withOptimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "webp", "gif"],
        optimizeImages: true,
        optimizeImagesInDev: false
      }
    ],
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode
        ? "static/css/[name].css"
        : "static/css/[name].[contenthash:8].css",
      chunkFilename: devMode
        ? "static/css/[name].chunk.css"
        : "static/css/[name].[contenthash:8].chunk.css",
      ignoreOrder: true
    })
  ],
  nextConfig
);
