import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        paperAlt: "#F1EFE7",
        ink: "#1C1A16",
        inkSoft: "#57534A",
        inkFaint: "#8A867B",
        violet: "#5B4FE8",
        violetDeep: "#40359E",
        amber: "#C4650A",
        sage: "#3F6B52",
        line: "#E4E0D4",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
