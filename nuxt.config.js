export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OtaByte',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'description',
        name: 'description',
        content:
          'We offer high-quality content for everyone to watch anime and read manga, bookmark where you leave your chapters and episode with our tracker.',
      },
      { name: 'image', content: 'https://otabyte.net/ota.webp' },

      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://otabyte.net/' },
      { property: 'og:title', content: 'OtaByte - Anime Everytime' },
      {
        property: 'og:description',
        content:
          'We offer high-quality content for everyone to watch anime and read manga, bookmark where you leave your chapters and episode with our tracker.',
      },
      { property: 'og:image', content: 'https://otabyte.net/ota.webp' },

      { property: 'fb:app_id', content: '259805548002889' },

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://otabyte.net/' },
      { property: 'twitter:title', content: 'OtaByte - Anime Everytime' },
      {
        property: 'twitter:description',
        content:
          'We offer high-quality content for everyone to watch anime and read manga, bookmark where you leave your chapters and episode with our tracker.',
      },
      { property: 'twitter:image', content: 'https://otabyte.net/ota.webp' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
