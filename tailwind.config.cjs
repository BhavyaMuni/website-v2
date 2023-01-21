/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans]
		},
		screens: {
			xs: '100px',
			...defaultTheme.screens
		}
	},
	plugins: []
};
