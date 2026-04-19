// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', 'lenis/dist/lenis.css'],
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', '@primevue/nuxt-module'],
  fonts: {
    families: [
      {
        name: 'Montserrat',
        provider: 'google',
        weights: [400, 500, 600, 700],
        styles: ['normal'],
        subsets: ['latin'],
      },
    ],
  },
  experimental: {
    serverAppConfig: false,
  },
  primevue: {
    importTheme: { from: '~/themes/kowju.preset.ts' },
    options: {
      ripple: true,
      inputVariant: 'filled',
    },
  },
})
