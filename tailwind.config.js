/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-carbon': '#0D364E', // Azul carbón (Primario)
        'brand-steel': '#3075B6',  // Azul Acero (Acento)
        'brand-orange': '#f97316', // Naranja Seguridad (Operativo)
        'brand-metal': '#27272a',  // Gris Maquinaria (Detalles)
        'brand-text': '#a1a1aa',   // Gris Técnico (Texto)
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
