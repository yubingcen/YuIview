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
  }
}
