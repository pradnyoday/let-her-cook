import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8EE",
        "soft-amber": "#FFF1E0",
        "deep-green": "#14532d",
        "deep-green-700": "#0f3f26",
        "warm-orange": "#F97316",
        "primary": "#14532d",
        "primary-dark": "#0f3f26",
        "text-primary": "#08332a",
        "text-secondary": "#6b6b6b",
        surface: "#ffffff",
        background: "#FFF8EE",
      },

      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        display: ["var(--font-playfair)"],
      },

      borderRadius: {
        xl2: "20px",
        xl: "16px",
      },

      boxShadow: {
        warm: "0 10px 30px rgba(20,83,63,0.06)",
        "warm-md": "0 8px 20px rgba(20,83,63,0.07)",
      },

      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;