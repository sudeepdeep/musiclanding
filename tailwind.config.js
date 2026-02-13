/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "background-light": "#f7f6f8",
        "background-dark": "#17141e",
        charcoal: "#1F2937",
      },
      fontFamily: {
        poppins: ["Poppins"],
        lemon: ["lemon"],
        orbitron: ["Orbitron, sans-serif"],
      },
    },
  },
  plugins: [],
};
