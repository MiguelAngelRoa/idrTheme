/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px", // Tamaño para teléfonos pequeños
        sm: "640px", // Tamaño para teléfonos medianos
        md: "768px", // Tamaño para tabletas
        lg: "1024px", // Tamaño para pantallas grandes
        xl: "1280px", // Tamaño para pantallas extra grandes
        "2xl": "1440px", // Tamaño para pantallas muy grandes
      },
    },
  },
  plugins: [],
};
