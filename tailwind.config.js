module.exports = {
  mode: "jit",
  content: [
    // "./src/assets/styles/**/*.{css}",
    "./src/components/*.{vue,js}",
    "./src/components/**/*.{vue,js}",
    "./src/pages/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/*.{vue,js,ts}",
    "./src/nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-dark':
          "url('https://khankhulgun.mn/logo_w.png')",
        'logo-light':
          "url('https://khankhulgun.mn/logo_b.png')",
      },
    },
  },
  darkMode: 'class',
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
