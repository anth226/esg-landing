module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        esgi: {
          primary: "#113345",
          secondary: "#B7824B",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
