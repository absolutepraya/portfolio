/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				instrument: ['Instrument Serif', 'serif'],
			},
			dropShadow: {
				'glow-blurple': '0 0 10px #3643FC, 0 0 20px #3643FC, 0 0 30px #3643FC, 0 0 40px #3643FC',
			}
		},
	},
	plugins: [],
};
