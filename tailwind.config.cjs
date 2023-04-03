/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				gradient: {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' }
				}
			},
			animation: {
				'move-gradient': 'gradient 10s ease infinite'
			}
		},
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
