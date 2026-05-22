import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-tazkarti)", "Tahoma", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.10)",
        glow: "0 20px 70px rgba(20, 184, 166, 0.18)"
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at top right, rgba(20,184,166,.24), transparent 35%), radial-gradient(circle at bottom left, rgba(99,102,241,.18), transparent 30%)"
      }
    }
  },
  plugins: []
};
export default config;
