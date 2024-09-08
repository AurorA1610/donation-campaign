/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".menu li > *:not(ul):not(.menu-title):not(details).active": {
            color: "#ff444a",
            backgroundColor: "transparent",
            textDecoration: "underline",
            fontWeight: "bold",
          },
          ".menu li > *:not(ul):not(.menu-title):not(details):hover": {
            backgroundColor: "rgb(254 202 202)",
          },
        },
      },
    ],
  },
};
