/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				gunmetal: '#1e3334ff',
				beet: '#E22061ff',
				cream: '#f3f9d2ff',
				ivory: '#FCFEF5',
				orchid: '#e2b4bdff',
			},
		},
	},

	plugins: [],
}

module.exports = config
