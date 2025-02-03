/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",  // Small screens
      md: "768px",  // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
