// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
  ],
  future: { compatibilityVersion: 4 },
  runtimeConfig: {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    public: {
      EMAIL_SENDER: "chatif476@gmail.com",
      EMAIL_SENDER_NAME: "Teel",
    },
  },
  googleFonts: {
    families: {
      Inter: true,
      Montserrat: true,
      "Open Sans": [400, 500, 600, 700],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Teel - Payments Simplified",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "title",
          content: "Teel - Payments Simplified",
        },
        {
          name: "description",
          content:
            "Built for a new generation of customers, making payment management simple, social, and fast. It's fun, it's seamless. If there's a payment, just Teel it.",
        },
        { name: "theme-color", content: "#ffffff" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap",
        },
      ],
    },
  },
});