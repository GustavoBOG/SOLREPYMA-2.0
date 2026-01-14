/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-black': '#0D364E', // Azul carbón
        'industrial-gray': '#0f415c',  
        'machine-metal': '#27272a',    
        'electric-blue': '#2563eb',    
        'safety-orange': '#f97316',    
        'warning-yellow': '#eab308',   
        'technical-text': '#a1a1aa',   
        'steel-blue': '#3075B6',      // Azul Acero
      },
      fontFamily: {
        'display': ['"Roboto"', 'sans-serif'],
        'body': ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
