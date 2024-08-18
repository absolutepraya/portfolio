/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				instrument: ['Instrument Serif', 'serif'],
			},
			colors: {
				blurple: '#3643FC',
				blurpleopa: 'rgba(54, 67, 252, 0.4)',
				customblack: '#0d0d0d',
				customgray: '#262626',
				customwhite: '#cccccc',
			},
			boxShadow: {
				glowblurple: '0px 0px 2000px -7px rgba(54,67,252,0.7)',
				glowblurplesmall: '0px 0px 130px -7px rgba(54,67,252,0.9)',
			},
		},
	},
	plugins: [],
};
