const devRemoteUrl = 'http://127.0.0.1:8090'
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('@base', resolve('src/app/desktop/base'))
      .set('@desktop', resolve('src/app/desktop'))
  },
  devServer: {
    host: '0.0.0.0',
    port: 8072,
    proxy: {
      '/api': {
        target: devRemoteUrl
      }
    }
  }
}
