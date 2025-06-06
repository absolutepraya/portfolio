/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        instrument: ['Instrument Serif', 'serif'],
        jetbrainsmono: ['JetBrains Mono', 'monospace'],
        maplemono: ['Maple Mono', 'monospace'],
      },
      colors: {
        blurple: '#3643FC',
        blurpleopa: 'rgba(54, 67, 252, 0.4)',
        customblack: '#0d0d0d',
        customgray: '#262626',
        customwhite: '#cccccc',
        customlightgray: '#3e3e3e',
      },
      boxShadow: {
        // glowblurple: '0px 0px 500px -7px rgba(54,67,252,0.9)',
        glowblurple: '0px 0px 130px -7px rgba(54,67,252,0.9)',
        glowblurplesmall: '0px 0px 130px -7px rgba(54,67,252,0.9)',
        glowblurpleextrasmall: '0px 0px 40px -7px rgba(54,67,252,0.9)',
        glowcustomblack: '-41px 30px 35px 23px rgba(13,13,13,1)',
        glowcustomblacksmall: '-56px -1px 40px -8px rgba(13,13,13,1)',
      },
      animation: {
        shine: 'shine var(--duration) infinite linear',
        "spinner-blade": "spinner-blade 1s linear infinite",
      },
      keyframes: {
        shine: {
          '0%': {
            'background-position': '0% 0%',
          },
          '50%': {
            'background-position': '100% 100%',
          },
          to: {
            'background-position': '0% 0%',
          },
        },
        "spinner-blade": {
          "0%": { opacity: "0.85" },
          "50%": { opacity: "0.25" },
          "100%": { opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};