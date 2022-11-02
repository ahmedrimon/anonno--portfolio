/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pt': ['PT Serif'],
        'antiga': ['Antiga'],
        'montreal': ['PP Neue Montreal Book'],
        'montreal__medium': ['PP Neue Montreal Medium'],

      },
    },
  },
  plugins: [],
}
