const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				brand: {
					orange: {
						default: '#F1602F',
					},
				},
			},
			typography: {
				white: {
					css: {
						color: '#FFFFFF',
					},
				},
			},
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				'mobile-base': '15px',
				'2.6xl': '26px',
			},
			aspectRatio: {
				43: '43',
				60: '60',
			},
		},
	},
	variants: {
		extend: {},
	},

	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
