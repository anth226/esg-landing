/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				esgi: {
					primary: '#B7824B',
					'base-100': '#113345',
					'base-200': '#0b212d',
					fontFamily: "'EB Garamond', serif",
					'.font-sans': {
						fontFamily: 'Poppins, sans-serif',
					},
					'--rounded-btn': '0px',
					'--rounded-box': '0px',
				},
			},
		],
	},
};
