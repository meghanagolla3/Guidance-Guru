// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Process all files in src folder
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",   // Blue color (example: blue-700)
        secondary: "#9333EA", // Purple color (example: purple-600)
        accent: "#F59E0B",    // Amber color (example: amber-500)
      },
    },
  },
  plugins: [],
};
