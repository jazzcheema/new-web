import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyFont', 'sans-serif'],
        light: ['LightFont', 'sans-serif'],
      },
      animation: {
        'flash-pulse': 'flashPulse 2s infinite',
        'slow-glow': 'slow-glow 5s ease-in-out infinite',
      },
      keyframes: {
        flashPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1)' },
        },
        'slow-glow': {
          '0%': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
          },
          '100%': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
