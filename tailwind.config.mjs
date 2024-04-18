/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '375px',
			},
			fontFamily: {
				manrope: ['Manrope', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
