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
        spotlight: "spotlight 2s ease .75s 1 forwards",
        fadeIn: 'fadeIn 2s ease-in-out forwards',
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
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      mixBlendMode: {
        overlay: 'overlay',
        multiply: 'multiply',
        screen: 'screen',
        darken: 'darken',
        lighten: 'lighten',
        colorDodge: 'color-dodge',
        colorBurn: 'color-burn',
        hardLight: 'hard-light',
        softLight: 'soft-light',
        difference: 'difference',
        exclusion: 'exclusion',
        hue: 'hue',
        saturation: 'saturation',
        color: 'color',
        luminosity: 'luminosity',
      },
    },
  },
  variants: {
    extend: {
      mixBlendMode: ['hover', 'focus'],
    },
  },
  plugins: [],
};

export default config;