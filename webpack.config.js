var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "configcat.min.js",
    library: "configcat"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new WebpackAutoInject({
        components: {
            AutoIncreaseVersion: false
        }
    })
  ],
};
