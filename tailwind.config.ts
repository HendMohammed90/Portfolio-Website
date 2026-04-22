import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b15",
        bg2: "#11122a",
        accent: "#a855f7",
        accent2: "#22d3ee",
        ink: "#e5e7eb",
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        blob: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(30px,-20px) scale(1.1)" }, "66%": { transform: "translate(-20px,20px) scale(0.9)" } },
        gradient: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
