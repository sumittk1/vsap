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
        // Brand Colors - extracted from Figma
        brand: {
          purple: "#6B3FF3",       // Primary purple - hero backgrounds
          "purple-dark": "#4A1FC7", // Darker purple
          "purple-light": "#8B65F5",
          coral: "#FF5A3C",        // CTA sections orange/coral
          "coral-dark": "#E04832",
          lavender: "#EEE9FF",     // Light section backgrounds
          "lavender-mid": "#E2DAFF",
          navy: "#1A0A3B",         // Footer dark bg
          "navy-light": "#2D1A5E",
        },
        // UI Colors
        foreground: "#0A0A0A",
        muted: "#6B6B80",
        border: "#E5E5E9",
        "border-dark": "#D0D0D8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h1": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "sm": ["0.875rem", { lineHeight: "1.5" }],
        "xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "card": "1rem",
        "btn": "0.5rem",
        "pill": "9999px",
      },
      boxShadow: {
        "card": "0 2px 16px 0 rgba(0,0,0,0.08)",
        "card-hover": "0 8px 32px 0 rgba(0,0,0,0.14)",
        "nav": "0 1px 0 0 rgba(0,0,0,0.06)",
        "dropdown": "0 8px 32px 0 rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-down": "slideDown 0.3s ease forwards",
        "count-up": "countUp 1.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        "container": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
