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
    '~/assets/styles/plugins.scss',
    "~/assets/styles/app.scss",
  ],

  buildModules: [
    // '@vueuse/nuxt'
  ],

  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },

  meta: {
    meta: [
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "description", content: "khankhulgun.mn нэгдсэн платформ." },
      { name: "og:url", content: "https://khankhulgun.mn/" },
      { name: "og:type", content: "article" },
      { name: "og:title", content: "Khan Khulgun Team" },
      { name: "og:description", content: "Khan Khulgun Team" },
      { name: "og:image", content: "https://khankhulgun.mn/constellation.png" },
    ],
    link: [
      { rel: "icon", href: "https://khankhulgun.mn/logo_b.png" },
      {
        rel: "stylesheet",
        id: "theme-link",
        href: "/themes/box-office/theme.css",
      },
    ],
  },
  generate: {
    routes: ["/"],
    subFolders: true,
  },
  ssr: false,
});
