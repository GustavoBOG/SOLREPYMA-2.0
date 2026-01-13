/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-black': '#0D364E', // New Navy Blue
        'industrial-gray': '#0f415c',  // Slightly lighter variant for cards
        'machine-metal': '#27272a',    // Zinc 800 - Borders/Cards
        'electric-blue': '#2563eb',    // Blue 600 - Sharp accent
        'safety-orange': '#f97316',    // Orange 500 - Alert
        'warning-yellow': '#eab308',   // Yellow 500 - Caution
        'technical-text': '#a1a1aa',   // Zinc 400 - Subtitles
      },
      fontFamily: {
        'display': ['"Archivo Black"', 'sans-serif'],
        'body': ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
