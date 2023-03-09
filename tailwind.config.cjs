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
			'egg': '#E5E2E3',
			'blue': '#4285F4',
			'red': '#DB4437',
			'yellow': '#F4B400',
			'green': '#0F9D58'
		}
	},
	plugins: [],
}
