export default {
  env: {
    API_URL: process.env.API_URL,
  },
  layoutTransition: {
    name: 'fade-transform',
  },
  pageTransition: {
    name: 'fade-transform',
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Nuxt Element Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    '@/lib/styles/index.scss',
    '~/assets/scss/main.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // Lib plugin
    '@/lib/plugins/router',
    '@/lib/plugins/element-ui',
    '@/lib/plugins/plugins.js',
    '@/lib/plugins/plugins.server.js',
    '@/lib/plugins/plugins.client.js',
    // Custom plugin
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: ['~/components/global', '~/lib/components/global'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt/content
    '@nuxtjs/svg-sprite',
  ],
  svgSprite: {
    input: '~/lib/icons/svg',
    elementClass: 'svg-icon',
  },
  styleResources: {
    scss: ['@/lib/styles/variables.scss', '~/assets/scss/variables.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: '/auth/logout',
            method: 'post',
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'user',
          },
        },
      },
    },
    redirect: {
      login: '/login',
      home: '/',
    },
  },
  router: {
    middleware: ['auth'],
    base: process.env.DEPLOY_MODE === 'github' ? '/nuxt-element-admin/' : '/',
  },
  // serverMiddleware: ['~/mock'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
}
