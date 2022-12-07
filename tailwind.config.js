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
        'antiga': ['Antiga'],
        'montreal__medium': ['PP Neue Montreal Medium'],
        'graphik': ['Graphik LCG'],
        'cardinal': ['Cardinal Fruit'],
        'acma': ['PP Acma Light'],
      },
    },
  },
  plugins: [],
}
