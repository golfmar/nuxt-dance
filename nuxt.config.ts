// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'normalize.css'
  ],
  vite: {
     plugins: [
      require('vite-svg-loader')()
    ],
    css: {
      preprocessorOptions: {
        scss: {
           additionalData: `
            @use "~/assets/scss/main.scss" as *;
          `
        }
      }
    }
    }
})