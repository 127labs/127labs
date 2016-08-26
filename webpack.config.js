const config = require('hjs-webpack')({
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: '!assets',
  devServer: {
    stats: {
      colors: true
    }
  },
  html (context) {
    return {
      'index.html': context.defaultTemplate({
        head: `<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
               <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32">
               <link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16">
               <link rel="manifest" href="/assets/manifest.json">
               <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5">
               <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400|Roboto:300,400" rel="stylesheet">
               <meta name="theme-color" content="#ffffff">
              `,
        title: 'KL-based Full-Stack Software Development and UI UX Design Consultancy',
        metaTags: {
          'og:title': 'KL-based Full-Stack Elixir Software Development and UI UX Design Consultancy',
          'og:description': 'Build your app while you hire your dream team. We excel in augmenting/training staff, delivering elegant code, and seamlessly handing off to you for rapid iteration.',
          'og:image': '/assets/fb.jpg',
          'og:url': 'https://127labs.com',
          'og:site_name': '127 Labs, LLP',
          'twitter:card': 'summary',
          'twitter:title': 'KL-based Full-Stack Elixir Software Development and UI UX Design Consultancy',
          'twitter:description': 'Build your app while you hire your dream team. We excel in augmenting/training staff, delivering elegant code, and seamlessly handing off to you for rapid iteration.',
          'twitter:image': '/assets/logo.png',
          'twitter:site': '@127labs'
        }
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
