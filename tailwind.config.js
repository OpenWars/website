import defaultConfig from "tailwindcss/defaultConfig"
import typography from "@tailwindcss/typography"
/*** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{svelte,js,ts,html}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#5b8241",
        brandDark: "#243519" // actually is the other way around but for the sake of simplicity...
      },
      fontFamily: {
        sans: ["Inter", ...defaultConfig.theme.fontFamily.sans]
      }
    },
  },
  plugins: [
    typography
  ],
}

