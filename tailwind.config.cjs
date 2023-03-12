/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'GeezaPro': 'geeza'
		},
		colors: {
			'neutral': '#383434',
			'neutralSecondary': 'rgb(84,77,78,0.56)',
			'egg': '#E5E2E3',
			// PRIMARIES
			'blue': '#4285F4',
			'red': '#DB4437',
			'yellow': '#F4B400',
			'green': '#0F9D58',
			'white': '#FFFFFF',
			'orange': '#CD5F00'
		}
	},
	plugins: [],
}
