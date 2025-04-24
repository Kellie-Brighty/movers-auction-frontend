/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7E1D", // Orange from the Movers Auction logo
          50: "#FFF8F0",
          100: "#FEEBD3",
          200: "#FDD4A7",
          300: "#FCBD7B",
          400: "#FBA64F",
          500: "#FF8F23", // Slightly lighter than default
          600: "#FF7E1D", // Default (from logo)
          700: "#EA6800",
          800: "#BE5500",
          900: "#914000",
        },
        secondary: {
          DEFAULT: "#4144AF", // Blue from the Movers Auction logo
          50: "#EAEAFB",
          100: "#D5D6F7",
          200: "#AAACEF",
          300: "#8082E7",
          400: "#5558DF",
          500: "#4144AF", // Default (from logo)
          600: "#353794",
          700: "#292B78",
          800: "#1D1F5C",
          900: "#11123F",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 4px 15px rgba(0, 0, 0, 0.05)",
        hover: "0 8px 30px rgba(0, 0, 0, 0.12)",
        card: "0 2px 4px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
