
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"]
      },
      colors: {
        primary: "#4CAF50",
        secondary: "#8B4513",
        accent: "#FFD700",
        neutral: "#A9A9A9",
        base: {
          100: "#F5F5DC"
        },
        info: "#87CEEB",
        success: "#228B22",
        warning: "#DAA520",
        error: "#B22222"
      }
    }
  }
}