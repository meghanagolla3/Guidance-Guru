// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Scan all files in src folder
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",     // Blue
        secondary: "#9333EA",   // Purple
        accent: "#F59E0B",      // Amber
        background: "#F3F4F6",  // Light gray for backgrounds
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
