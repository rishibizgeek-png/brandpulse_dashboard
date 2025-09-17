/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#101d23",
        card: "#182b34",
        muted: "#223c49",
        accent: "#0da6f2",
      },
    },
  },
  plugins: [],
}
