/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'10%': { transform: 'rotate(-15deg)' },
                    '40%': { transform: 'rotate(15deg)'},
                    '50%': { transform: 'rotate(0deg)'},
                    '60%': { transform: 'rotate(15deg)' },
                    '90%': { transform: 'rotate(-15deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 0.8s cubic-bezier(0.770, 0.000, 0.175, 1.000)'
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
