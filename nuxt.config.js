import pkg from './package'
import path from 'path'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "RH Beach House",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Fav.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/qte7clu.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],

  /*
  ** Nuxt.js modules
  */
  modules: [

  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'tailwindcss': path.resolve('./tailwind.js')
      },
      preset: { 
        autoprefixer: { 
          grid: true 
        } 
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
