import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            primary: "#020617",
            secondary: "#0a1a1f",
            tertiary: "#0f2a31",
          },
          accent: {
            primary: "#14b8b8",
            secondary: "#22d3ee",
            tertiary: "#67e8f9",
          },
          text: {
            primary: "#ecfeff",
            secondary: "#94d8d8",
            muted: "#5a8585",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
