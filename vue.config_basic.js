const path = require('path')
const fs = require('fs')

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',

  // where to output built files
  outputDir: 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // https://cli.vuejs.org/config/#runtimecompiler
  runtimeCompiler: false,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  transpileDependencies: [
    /* string or regex */
  ],

  // generate sourceMap for production build?
  productionSourceMap: process.env.NODE_ENV !== 'production',

  // https://github.com/vuejs/vue-cli/blob/dev/docs/css.md (#Need to put the top)
  css: {
    modules: false,
    // extract: true,
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        data: `
              @import 'src/assets/scss/variable.scss';
              @import 'src/assets/scss/common.scss';
              @import 'src/assets/scss/reset.scss';
          `
        // publicPath:'../../'
      }
    }
  },

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@assets', resolveRealPath('src/assets'))
      .set('@components', resolveRealPath('src/components'))
      .set('@views', resolveRealPath('src/views'))
      .set('@model', resolveRealPath('src/model'))
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: true,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: null, // string | Object
    before: app => {}
  }
}
