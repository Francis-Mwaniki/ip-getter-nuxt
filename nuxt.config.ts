// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','nuxt-icon','@huntersofbook/chatwoot-nuxt'],
   
    chatwoot: {
      init: {
        websiteToken: 'b6BejyTTuxF4yPt61ZTZHjdB'
      },
      settings: {
        locale: 'en',
        position: 'right',
        launcherTitle: 'Hello Chat',
      }
    },

    tailwindcss: {
        cssPath: "~/assets/css/main.css",
      },

})
