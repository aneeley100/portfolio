/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        dynamicName: "min(4rem, 11.5vw)",
        dynamicSub: 'min(3.1rem, 9vw)',
        dynamicFooter: 'min(9pt, 4vw)'
      },
      minWidth: {
        dynamicSub: 'min(520px, 95vw)',
      }
    },
    fontFamily: {
      term: ["Source Code Pro", "monospace"],
      display: ["Montserrat", "sans-serif"],
      body: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [],
}