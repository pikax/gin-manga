const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',


  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | GinCloud.net',
    meta: [
      {charset: 'utf-8'},
      {name: "viewport", content: 'width=device-width, initial-scale=1, user-scalable=no'}
    ],

    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#C0C0C0'},

  loadingIndicator: {
    name: 'wandering-cubes',
    color: 'white',
    background: '#C0C0C0'
  },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/app.ts', ssr: false},
    '@/plugins/i18n.ts',
    {src: '~/plugins/localStorage.js', ssr: false},
    '@/plugins/vuetify',
    {src: '~/plugins/networkStatus.ts', ssr: false},
    {src: '~/plugins/app_finish.ts', ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '~modules/typescript.js',
    '@nuxtjs/pwa',
    '@nuxtjs/component-cache',
  ],


  router: {
    middleware: [
      // 'https'
    ]
  },

  /*
  ** PWA manifest
  */

  manifest: {
    name: 'Gincloud',
    description: 'Manga website',

    theme_color: '#C0C0C0'
  },

  //
  // workbox:{
  //   importScripts: [
  //     'sw.js'
  //   ],
  // },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }

      // config.resolve.alias['create-api'] = `./create-api-${ctx.isClient ? 'client' : 'server'}.js`
    },

    vendor: ['firebase', 'vue-i18n']
  },

  render: {
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.includes('sw.js')) {
          res.setHeader('Cache-Control', 'public, max-age=0')
        }
      }
    }
  }
}
