/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "hero-bg": "/image/background.png"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slider: "slider 10s infinite ease-in-out"
      },
      keyframes : {
        slider: {
          "0%" : {
            transform: "translateX(0%)",
          },
          "100%" : {
             transform: "translateX(-100%)"
          }
        }
      }
    },
  },
  plugins: [
   
  ],
};
