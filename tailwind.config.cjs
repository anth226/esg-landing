const plugin = require('tailwindcss/plugin');

/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
		plugin(function ({ addBase }) {
			addBase({
				'@font-face': {
					fontFamily: 'Garamond',
					src: 'url("/assets/fonts/garamond-regular.woff2") format("woff2")',
					fontWeight: 400,
					fontDisplay: 'swap',
					fontStyle: 'normal',
				},
			});
			addBase({
				'@font-face': {
					fontFamily: 'Garamond',
					src: 'url("/assets/fonts/garamond-bold.woff2") format("woff2")',
					fontWeight: 700,
					fontDisplay: 'swap',
					fontStyle: 'normal',
				},
			});
		}),
	],
	daisyui: {
		themes: [
			{
				esgi: {
					primary: '#B7824B',
					'base-100': '#113345',
					'base-200': '#0b212d',
					fontFamily: 'Garamond, EB Garamond, serif',
					'.font-sans': {
						fontFamily: 'Poppins, sans-serif',
					},
					'--rounded-btn': '0.3rem',
					'--rounded-box': '0.3rem',
					'--btn-text-case': 'none',
				},
			},
		],
	},
};
