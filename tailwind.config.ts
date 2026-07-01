import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: "#F0F4F0",
        pine: "#2C5F2E",
        "pine-light": "#4A8F4D",
        dawn: "#D4732A",
        bark: "#3D2B1F",
        cloud: "#FFFFFF",
        "mist-dark": "#D8E4D8",
        "wa-green": "#25D366",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
