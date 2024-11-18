// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/@liveqing/liveplayer-v3/dist/component/crossdomain.xml',
          },
          {
            from: 'node_modules/@liveqing/liveplayer-v3/dist/component/liveplayer.swf',
          },
          {
            from: 'node_modules/@liveqing/liveplayer-v3/dist/component/liveplayer-lib.min.js',
            to: 'js/',
          },
        ],
      }),
    ],
  },
};
