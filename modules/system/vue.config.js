module.exports = {
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', false)
    config.output.filename(`[name].js`)
    config.externals(['vue', 'vue-router'])
  },
  filenameHashing: false
}
