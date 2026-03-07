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
      },
      colors: {
        blurple: '#3643FC',
        blurpleopa: 'var(--color-accent-opa)',
        customblack: 'var(--color-card-bg)',
        customgray: 'var(--color-border)',
        customwhite: 'var(--color-text-primary)',
        customlightgray: 'var(--color-border-light)',
        'page-bg': 'var(--color-page-bg)',
        'card-from': 'var(--color-card-gradient-from)',
        'card-to': 'var(--color-card-gradient-to)',
        'text-secondary': 'var(--color-text-secondary)',
        'btn-bg': 'var(--color-button-bg)',
        'btn-active-bg': 'var(--color-button-active-bg)',
        'theme-border-bevel': 'var(--color-border-bevel)',
        'theme-placeholder': 'var(--color-placeholder)',
        'tooltip-bg': 'var(--color-tooltip-bg)',
        'tooltip-text': 'var(--color-tooltip-text)',
        'contact-outer-border': 'var(--color-contact-outer-border)',
      },
      boxShadow: {
        glowblurple: 'var(--color-glow-accent)',
        glowblurplesmall: 'var(--color-glow-accent-small)',
        glowblurpleextrasmall: 'var(--color-glow-accent-xs)',
        glowcustomblack: 'var(--color-shadow-black-glow)',
        glowcustomblacksmall: 'var(--color-shadow-black-glow-sm)',
      },
      animation: {
        shine: 'shine var(--duration) infinite linear',
        'spinner-blade': 'spinner-blade 1s linear infinite',
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
        'spinner-blade': {
          '0%': { opacity: '0.85' },
          '50%': { opacity: '0.25' },
          '100%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
};
