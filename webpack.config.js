const config = require('hjs-webpack')({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: true,
  devServer: {
    stats: {
      colors: true
    }
  },
  html (context) {
    return {
      'index.html': context.defaultTemplate({
        head: '<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400|Roboto:300,400" rel="stylesheet">'
      })
    }
  }
})

config.resolve.modulesDirectories = [
  'web_modules',
  'node_modules',
  'src',
  'src/modules/'
]

module.exports = config
