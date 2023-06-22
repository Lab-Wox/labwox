/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      "clear": "transparent",
      'black': '#000000',
      'blackii': '#212529',
      'blackiii': '#121127',
      'blackiv': '#1e1e1e',
      'orange': '#fe423d',
      'white': '#ffffff',
      'whitebg': '#f5f5f5',
      'whiteii': '#fcccca',
      'whitebgii': '#fafafa',
      'whitebgiii': '#e9e9e9',
      'whitebgiv': '#f7f7f7',
      'whitebgv': '#f0f3f2',
      'grey': '#767778',
      'greyii': '#f9f9fb',
      'yellow': '#f29b38',
      'yellowii': '#feb616',
      'yellowiii': '#eea400',
      'green': '#356741',
    },
    fontFamily: {
      "aeon": ['Aeonik', "sans-serif"],
      "fair": ["Playfair Display", "serif"]
    },
    extend: {
      backgroundImage: {
        "heroBg": "url('/src/assets/heroBg.png')",
        "heroImg": "url('/src/assets/heroImg.png')",
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}