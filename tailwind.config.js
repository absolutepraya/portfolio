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
				customlightgray: '#3e3e3e',
			},
			boxShadow: {
				glowblurple: '0px 0px 2000px -7px rgba(54,67,252,0.7)',
				glowblurplesmall: '0px 0px 130px -7px rgba(54,67,252,0.9)',
				glowcustomblack: '-41px 30px 35px 23px rgba(13,13,13,1)',
				glowcustomblacksmall: '-56px -1px 40px -8px rgba(13,13,13,1);'
			},
		},
	},
	plugins: [],
};
