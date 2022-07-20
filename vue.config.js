module.exports = {
  configureWebpack:{
    output: {
      filename: 'index.js',
      chunkFilename: '[id].js',
      libraryTarget: 'umd'
    },
    externals: {
      vue: "vue"
    }
  }

}