import { resolve } from "path";
import { defineNuxtConfig } from "nuxt";
// import "src/assets/fonts/tt-commons";

// @ts-ignore
export default defineNuxtConfig({
  alias: {
    public: resolve(__dirname, "./public/"),
  },

  srcDir: "src/",

  dir: {
    public: resolve(__dirname, "./public/"),
  },

  css: [
    '@/assets/styles/tailwind.css',
    '~/assets/styles/ant_light.less',
    '~/assets/styles/ant_dark.less',
    '~/assets/styles/plugins.scss',
    "~/assets/styles/app.scss",
  ],

  buildModules: [
    // '@vueuse/nuxt'

  ],
  // modules: ['@nuxtjs/color-mode'],
  vite:{
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': process.env.LAMBDA_PRIMARY_COLOR,
            'primary-color-dark-theme': process.env.LAMBDA_PRIMARY_COLOR },
          javascriptEnabled: true,
        },
        scss: {
          modifyVars: { 'primary-color': process.env.LAMBDA_PRIMARY_COLOR, 'primary-color-dark-theme': process.env.LAMBDA_PRIMARY_COLOR },
          additionalData: `
          $primary-color: ${process.env.LAMBDA_PRIMARY_COLOR};
          $ag-primary-color: ${process.env.LAMBDA_PRIMARY_COLOR};
          `,
        },
      },
    },
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },

  meta: {
    meta: [
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "charset", content: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      { name: "description", content: process.env.LAMBDA_DESCRIPTION  },
      { name: "og:url", content: process.env.LAMBDA_FAVICON },
      { name: "og:type", content: "article" },
      { name: "og:title", content: process.env.LAMBDA_TITLE },
      { name: "og:description", content: process.env.LAMBDA_DESCRIPTION },
      { name: "og:image", content: process.env.LAMBDA_FAVICON},
    ],
    link: [
      { rel: "icon", href: process.env.LAMBDA_FAVICON },
    ],
  },
  generate: {
    routes: ["/"],
    subFolders: true,
  },
  ssr: false,
});
