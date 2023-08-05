/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        orange: "#FD9D3E",
        raisinBlack: "#202020",
        platinum: "#FF5B64",
      },
      backgroundColor: {
        orange: "#FD9D3E",
        raisinBlack: "#202020",
        platinum: "#FF5B64",
      },
      backgroundImage: {
        auth_bg: "url('./src/assets/auth_background.jpg')",
        dash_bg: "url('./src/assets/dashboard_banner.jpg')",
      },
    },
  },

  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
