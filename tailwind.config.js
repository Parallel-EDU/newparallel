/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Add these if you have them
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        hamburger: "981px",
        md: "880px",
        bigscreen: "1369px",
        biggerscreen: "1440px",
        smalllaptop: "1200px",
        bigphone: "520px",
        smallphone: "380px",
        // widescreen: "1900px",
        // widestscreen: "2500px",
      },
    },
  },
  plugins: [],
};
