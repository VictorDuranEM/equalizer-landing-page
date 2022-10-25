

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        "mobile": "url('/bg-main-mobile.png')",
        "tablet": "url('/bg-pattern-1.svg'), url('/bg-main-tablet.png')",
        "desktop": "url('/bg-pattern-1.svg'), url('/bg-main-desktop.png')",
      },
      backgroundPosition: {
        "mobile": "right -12rem top -14rem",
        "tablet": "right top, center top -14rem",
      },
      backgroundSize: {
        "tablet": "266px, auto",
        "desktop": "auto, auto",
      }
    },
  },
  plugins: [],
}
