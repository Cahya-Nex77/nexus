/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#05070C",
          950: "#04050A",
          900: "#0A0C13",
          800: "#12151E",
          700: "#1B1F2B",
          600: "#282D3D",
        },
        indigo: {
          glow: "#2563EB",
        },
        cyan: {
          glow: "#3B9DF8",
        },
        slate: {
          soft: "#9AA4B8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(600px circle at 50% 0%, rgba(37,99,235,0.22), transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,0.4)",
        "glow-cyan": "0 0 40px rgba(59,157,248,0.3)",
        card: "0 8px 30px rgba(0,0,0,0.5)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      perspective: {
        1000: "1000px",
        1500: "1500px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
