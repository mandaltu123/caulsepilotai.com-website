/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050608",
        nebula: "#0b1020",
        cyanGlow: "#5eead4",
        violetGlow: "#8b5cf6"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(94,234,212,0.25), transparent 50%), radial-gradient(circle at 80% 10%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 50% 80%, rgba(56,189,248,0.2), transparent 50%)"
      },
      boxShadow: {
        glow: "0 0 50px rgba(94, 234, 212, 0.2)",
        glass: "0 20px 50px rgba(15, 23, 42, 0.3)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite"
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        space: ["var(--font-space)", "Space Grotesk", "sans-serif"]
      }
    }
  },
  plugins: []
};
